package com.sanli.vocabulary;




import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.FragmentActivity;
import android.util.Log;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.sanli.vocabulary.BuildConfig;
import com.facebook.react.ReactActivity;

import java.util.concurrent.ArrayBlockingQueue;


class ReactActivityDelegateWrap extends ReactActivityDelegate {
    private Bundle mProps;
    public ReactActivityDelegateWrap(Activity activity, @Nullable String mainComponentName) {
        super(activity, mainComponentName);
    }

    public ReactActivityDelegateWrap(FragmentActivity fragmentActivity, @Nullable String mainComponentName) {
        super(fragmentActivity, mainComponentName);
    }

    @Nullable @Override protected Bundle getLaunchOptions() {
        return mProps;
    }

    //设置传入props
    protected void setLaunchOptions(Bundle props) {
        mProps = props;
    }
}

public class MainActivity extends ReactActivity {
    //构建一个阻塞的单一数据的队列
    public static ArrayBlockingQueue<String> mQueue = new ArrayBlockingQueue<String>(1);

    private ReactActivityDelegateWrap reactActivityDelegatecopy;
    /**
     * Returns t                he name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "HelloWorld";
    }


    @Override protected ReactActivityDelegate createReactActivityDelegate() {
        Bundle bundle = new Bundle();
        String state = MyApplication.getMyShareData();
        bundle.putString("KEY", state);
//替换ReactActivityDelegate 为 ReactActivityDelegateWrap
        ReactActivityDelegateWrap
                reactActivityDelegate = new ReactActivityDelegateWrap(this, getMainComponentName());
        reactActivityDelegatecopy=reactActivityDelegate;
//传入props
        reactActivityDelegate.setLaunchOptions(bundle);


        //MyApplication.setMyShareData("ddd");
        return reactActivityDelegate;
    }

    @Override
    protected void onPause() {
        super.onPause();
        MyApplication.setReactContext(getReactNativeHost().getReactInstanceManager().getCurrentReactContext());
        Log.d("MainActivity","onPause");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d("MainActivity","onResume");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d("MainActivity","onDestroy");
    }


    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    //@Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    //@Override
//    protected List<ReactPackage> getPackages() {
//        return Arrays.<ReactPackage>asList(
//                new MainReactPackage(),
//                new IntentReactPackage()
//        );
//    }

    /**
     * 打开 带返回的Activity
     * @param requestCode
     * @param resultCode
     * @param data
     */
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK && requestCode == 200) {
            String result = data.getStringExtra("data");
//            WritableMap event = Arguments.createMap();
//            event.putString("type","back");
//            sendEvent(getReactNativeHost().getReactInstanceManager().getCurrentReactContext(), "ABC",event);
            if (result != null && !result.equals("")) {
                mQueue.add(result);
            } else {
                mQueue.add("无数据啦");
            }
        } else {
            mQueue.add("没有回调...");
        }
    }

    public static void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap paramss)
    {

        if(reactContext!=null){
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, paramss);
        }

    }
}
