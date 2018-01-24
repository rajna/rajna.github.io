package com.sanli.vocabulary;

import android.app.Application;
import android.content.Context;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import com.heng.wheel.WheelPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.sanli.vocabulary.reactmodule.GetUuidPackage;

import org.pgsqlite.SQLitePluginPackage;


/**
 * Created by jason on 16/9/30.
 */

public class MyApplication extends Application implements ReactApplication {
    private static String myShareData;

    public static String getMyShareData(){
        return myShareData;
    }
    public static void setMyShareData(String s){
        myShareData = s;
    }

    public static void setReactContext(ReactContext context){
        reactContext = context;
    }

    public static ReactContext getReactContext(){
        return reactContext;
    }

    private static Context context;

    private static ReactContext reactContext;

    @Override
    public void onCreate(){
        super.onCreate();
        context=getApplicationContext();
    }


    public static Context getContext(){
        return context;
    }


    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        public boolean getUseDeveloperSupport() {
            return true;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new IntentReactPackage(),
                    new VectorIconsPackage(),
                    new GetUuidPackage(),
                    new SQLitePluginPackage(),
                    new WheelPackage()
                    //new RealmReactPackage()
            );
        }

    };
    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
