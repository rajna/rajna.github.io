package com.sanli.vocabulary.reactmodule;

import android.bluetooth.BluetoothAdapter;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.wifi.WifiManager;
import android.provider.Settings;
import android.telecom.Call;
import android.telephony.TelephonyManager;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.UnsupportedEncodingException;
import java.util.UUID;

/**
 * Created by wurongjiang on 2017/11/10.
 */

public class GetUuid extends ReactContextBaseJavaModule {
    protected static final String PREFS_FILE = "device_id.xml";
    protected static final String PREFS_DEVICE_ID = "device_id";

    protected static UUID uuid;

    public GetUuid(ReactApplicationContext reactContext){
        super(reactContext);
    }
    @Override
    public String getName() {
        return "GetUuid";
    }

    public synchronized  String DeviceUuidFactory(Context context) {
        if (uuid == null) {
            synchronized (GetUuid.class) {
                if (uuid == null) {
                    final SharedPreferences prefs = context.getSharedPreferences(PREFS_FILE, 0);
                    final String id = prefs.getString(PREFS_DEVICE_ID, null);

                    if (id != null) {
                        // Use the ids previously computed and stored in the prefs file
                        uuid = UUID.fromString(id);

                    } else {
                        final String androidId = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ANDROID_ID);

                        // Use the Android ID unless it's broken, in which case fallback on deviceId,
                        // unless it's not available, then fallback on a random number which we store
                        // to a prefs file
                        try {
                            if (!"9774d56d682e549c".equals(androidId)) {
                                uuid = UUID.nameUUIDFromBytes(androidId.getBytes("utf8"));
                            } else {
                                final String deviceId = ((TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE)).getDeviceId();
                                uuid = deviceId != null ? UUID.nameUUIDFromBytes(deviceId.getBytes("utf8")) : UUID.randomUUID();
                            }
                        } catch (UnsupportedEncodingException e) {
                            throw new RuntimeException(e);
                        }

                        // Write the value out to the prefs file
                        prefs.edit().putString(PREFS_DEVICE_ID, uuid.toString()).commit();

                    }

                }
            }
        }

        return uuid.toString();

    }

//    public synchronized  String getBluethid(Context context) {
//        BluetoothAdapter mBlueth= BluetoothAdapter.getDefaultAdapter();
//        String mBluethId="";
//        if (mBlueth!=null){
//            mBluethId= mBlueth.getAddress();
//        }
//        return mBluethId;
//    }

//    public synchronized String getMacid(Context context) {
//        WifiManager wm = (WifiManager)context.getSystemService(context.WIFI_SERVICE);
//        String WLANMAC = wm.getConnectionInfo().getMacAddress();
//        return WLANMAC ;
//    }


    @ReactMethod
    public void generator(Callback successBack){
        ReactApplicationContext reactContext=getReactApplicationContext();
        String result = DeviceUuidFactory(reactContext);

        successBack.invoke(result);
    }
}
