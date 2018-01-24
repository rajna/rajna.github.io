package com.sanli.vocabulary;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;

import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.bigkoo.pickerview.TimePickerView;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.sanli.vocabulary.adapter.MyWheelAdapter;
import com.wx.wheelview.common.WheelData;
import com.wx.wheelview.util.WheelUtils;
import com.wx.wheelview.widget.WheelView;


import java.lang.reflect.Array;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;


public class TwoActivity extends AppCompatActivity {

    public String selectorder="";

    private int positioncout=0;

    private int positiontime=0;

    private Boolean select1start=false;

    private Boolean select2start=false;

    private int scrolledY=0;

    private TimePickerView pvTime;

    private int text_count_select=0;

    //来自哪个页面
    private String params_from="";

    private String text_count_val="";
    private String text_timecost_val="";


    private WheelView mainWheelView, subWheelView, childWheelView, hourWheelView, minuteWheelView, secondWheelView,
            commonWheelView,
            simpleWheelView, simpleWheelView2,wheelviewcout,wheelviewtime;

    ArrayList<String> timelist=new ArrayList<String>();;

    private ArrayList<String> createArrays() {
        ArrayList<String> list = new ArrayList<String>();

        list.add(5+"                                 "+1);
        list.add(15+"                                "+5);
        list.add(20+"                                "+10);
        list.add(25+"                                "+15);
        list.add(215+"                                "+35);
        list.add(700+"                                "+700);
        list.add(1000+"                               "+1000);
        return list;
    }

    private void createArraysValue() {

        timelist.add(5+"|"+1);
        timelist.add(15+"|"+5);
        timelist.add(20+"|"+10);
        timelist.add(25+"|"+15);
        timelist.add(215+"|"+35);
        timelist.add(700+"|"+700);
        timelist.add(1000+"|"+1000);
    }

    private ArrayList<WheelData> createDatas() {
        ArrayList<WheelData> list = new ArrayList<WheelData>();
        WheelData item;
        for (int i = 0; i < 20; i++) {
            item = new WheelData();
            item.setId(R.mipmap.ic_launcher);
            item.setName((i < 10) ? ("0" + i) : ("" + i));
            list.add(item);
        }
        return list;
    }

    private String getTime(Date date) {//可根据需要自行截取数据显示
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return format.format(date);
    }

    private void initTimePicker() {
        //控制时间范围(如果不设置范围，则使用默认时间1900-2100年，此段代码可注释)
        //因为系统Calendar的月份是从0-11的,所以如果是调用Calendar的set方法来设置时间,月份的范围也要是从0-11
        Calendar selectedDate = Calendar.getInstance();
        Calendar startDate = Calendar.getInstance();
        startDate.set(2013, 0, 23);
        Calendar endDate = Calendar.getInstance();
        endDate.set(2019, 11, 28);
        //时间选择器
        pvTime = new TimePickerView.Builder(this, new TimePickerView.OnTimeSelectListener() {
            @Override
            public void onTimeSelect(Date date, View v) {//选中事件回调
                // 这里回调过来的v,就是show()方法里面所添加的 View 参数，如果show的时候没有添加参数，v则为null
                /*btn_Time.setText(getTime(date));*/
                Button btn = (Button) v;
                btn.setText(getTime(date));
            }
        })
                //年月日时分秒 的显示与否，不设置则默认全部显示
                .setType(new boolean[]{true, true, true, false, false, false})
                .setLabel("", "", "", "", "", "")
                .isCenterLabel(false)
                .setDividerColor(Color.DKGRAY)
                .setContentSize(21)
                .setDate(selectedDate)
                .setRangDate(startDate, endDate)
                .setBackgroundId(0x00FFFFFF) //设置外部遮罩颜色
                .setDecorView(null)
                .build();
    }


    private void initWheel1() {

//        simpleWheelView = (WheelView) findViewById(R.id.simple_wheelview);
//        simpleWheelView.setWheelAdapter(new SimpleWheelAdapter(this));
//        simpleWheelView.setWheelSize(5);
//        simpleWheelView.setWheelData(createDatas());
//        simpleWheelView.setSkin(WheelView.Skin.None);
//        simpleWheelView.setLoop(true);
//        simpleWheelView.setWheelClickable(true);
//
//        simpleWheelView.setOnWheelItemSelectedListener(new WheelView.OnWheelItemSelectedListener<WheelData>() {
//            @Override
//            public void onItemSelected(final int position, WheelData data) {
//                positioncout=position;
//                simpleWheelView2.postDelayed(new Runnable() {
//                    @Override
//                    public void run() {
//                        int l=positioncout-positiontime;
//                        simpleWheelView2.smoothScrollByOffset(l);
//                    }
//                }, 500);
//            }
//        });
//
//        simpleWheelView2 = (WheelView) findViewById(R.id.simple_wheelview2);
//        simpleWheelView2.setWheelAdapter(new SimpleWheelAdapter(this));
//        simpleWheelView2.setWheelSize(5);
//        simpleWheelView2.setWheelData(createDatas());
//        simpleWheelView2.setSkin(WheelView.Skin.None);
//        simpleWheelView2.setLoop(true);
//        simpleWheelView2.setWheelClickable(true);
//
//        simpleWheelView2.setOnWheelItemSelectedListener(new WheelView.OnWheelItemSelectedListener<WheelData>() {
//            @Override
//            public void onItemSelected(final int position, WheelData data) {
//                positiontime=position;
//                simpleWheelView.postDelayed(new Runnable() {
//                    @Override
//                    public void run() {
//                        int l=positiontime-positioncout;
//                        simpleWheelView.smoothScrollByOffset(l);
//                    }
//                }, 500);
//
//            }
//        });
        createArraysValue();
        wheelviewcout = (WheelView) findViewById(R.id.wheelviewcout);
        wheelviewcout.setWheelAdapter(new MyWheelAdapter(this));
        wheelviewcout.setWheelSize(7);
        wheelviewcout.setSkin(WheelView.Skin.None);
        wheelviewcout.setWheelData(createArrays());
        //wheelviewcout.setLoop(true);
        wheelviewcout.setWheelClickable(true);
        WheelView.WheelViewStyle style = new WheelView.WheelViewStyle();
        style.backgroundColor = Color.TRANSPARENT;
        style.textColor = Color.parseColor("#222222");
        style.selectedTextColor = Color.parseColor("#222222");
        wheelviewcout.setStyle(style);

        wheelviewcout.setSelection(text_count_select);

        final TextView text_count=(TextView)this.findViewById(R.id.text_count);

        final TextView text_timecost=(TextView)this.findViewById(R.id.text_timecost);


        wheelviewcout.setOnWheelItemSelectedListener(new WheelView.OnWheelItemSelectedListener<String>() {
            @Override
            public void onItemSelected(final int position, String data) {
                String thedata=timelist.get(position);
                String[] thedataArray=thedata.split("\\|");
                WheelUtils.log(thedataArray[0]);
                text_count.setText(thedataArray[0]);
                text_timecost.setText(thedataArray[1]);
                text_count_val=thedataArray[0];
                text_timecost_val=thedataArray[1];
//                final int offset=position-positioncout;
//                final int direction=positioncout-position>0?1:(positioncout==position?0:-1);
//                final int step=Math.abs(positioncout-position)>1?1:0;
//                positioncout=position;

//                wheelviewtime.postDelayed(new Runnable() {
//                    @Override
//                    public void run() {
//
//                        int l=offset;//+direction*step;
//                        //getSmoothDistance
//
//                        WheelUtils.log("start*******:");
//                        WheelUtils.log("positioncout:" + positioncout);
//                        WheelUtils.log("positiontime:" + positiontime);
//                        WheelUtils.log("positioncoutLen:" + l);
//                        //wheelviewtime.scrollToPercentVertical();
//                        WheelUtils.log("positioncout:" + positioncout);
//                        WheelUtils.log("positiontime:" + positiontime);
//                        WheelUtils.log("end*******:");
//
//                    }
//                }, 500);
            }
        });

        //wheelviewtime = (WheelView) findViewById(R.id.wheelviewtime);
        //wheelviewtime.setWheelAdapter(new MyWheelAdapter(this));
        //wheelviewtime.setWheelSize(5);
        //wheelviewtime.setSkin(WheelView.Skin.None);
        //wheelviewtime.setWheelData(createArrays());
        //wheelviewtime.setLoop(true);
        //wheelviewtime.setWheelClickable(true);
        //wheelviewtime.setStyle(style);

        //wheelviewtime.setOnWheelItemSelectedListener(new WheelView.OnWheelItemSelectedListener<String>() {
           // @Override
           // public void onItemSelected(final int position, String data) {
//                if(selectlock==true) return;
//                selectlock=true;
//                final int offset=position-positioncout;
////                final int direction=positioncout-position<0?1:(positioncout==position?0:-1);
////                final int step=Math.abs(positioncout-position)<1?1:0;
//                positiontime=position;
//
//
//                wheelviewcout.postDelayed(new Runnable() {
//                    @Override
//                    public void run() {
//
//                        int l=offset;//+direction*step;
//                        WheelUtils.log("start*******:");
//                        WheelUtils.log("positioncout:" + positioncout);
//                        WheelUtils.log("positiontime:" + positiontime);
//                        WheelUtils.log("positioncoutLen:" + l);
//                        wheelviewcout.smoothScrollByOffset(l);
//                        WheelUtils.log("positioncout:" + positioncout);
//                        WheelUtils.log("positiontime:" + positiontime);
//                        WheelUtils.log("end*******:");
//
//                    }
//                }, 500);
            //}
        //});
    }

    public static void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap paramss)
    {

        if(reactContext!=null){
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, paramss);
        }

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_setting);
        Intent mIntent=getIntent();

        initTimePicker();

        if(mIntent!=null) {
            String params=mIntent.getStringExtra("params");
            Log.d("twoactivity",params);
            String[] paramsArr=params.split("#");
            Log.d("twoactivity",paramsArr[0]);
            Log.d("twoactivity",paramsArr[1]);
            params_from=paramsArr[1];
            text_count_select=Integer.parseInt(paramsArr[0]);
        }
        initWheel1();
        Button btn_two=(Button)this.findViewById(R.id.btn_two);
        MyApplication.setMyShareData("");
        btn_two.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mIntent=new Intent(TwoActivity.this,MainActivity.class);
                mIntent.putExtra("data",text_count_val+"");
                TwoActivity.this.setResult(Activity.RESULT_OK,mIntent);
                String toreactpage=params_from=="reselect"?params_from:"fromandroid";
                MyApplication.setMyShareData(params_from);
                //TwoActivity.this.startActivity(mIntent);
                            WritableMap event = Arguments.createMap();
                event.putString("type",params_from);
                sendEvent(MyApplication.getReactContext(), "ABC",event);
                TwoActivity.this.finish();
                //pvTime.show(v);
            }
        });

        Button btn_back=(Button)this.findViewById(R.id.nav_button);

        btn_back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mIntent=new Intent(TwoActivity.this,MainActivity.class);
                mIntent.putExtra("data","back");
                TwoActivity.this.setResult(Activity.RESULT_OK,mIntent);
                TwoActivity.this.finish();

//                Intent intent=new Intent(Intent.ACTION_VIEW);
//                intent.setData(Uri.parse("sanlivocabulary://sanlivocabulary/DrawerNavigation"));
//                startActivity(intent);

//                Intent mIntent=new Intent(TwoActivity.this,MainActivity.class);
//                mIntent.putExtra("data","传入JS中的数据...123");
//                TwoActivity.this.startActivity(mIntent);
//                TwoActivity.this.finish();
            }
        });

        final Button btn_order1=(Button)this.findViewById(R.id.btn_order1);

        final Button btn_order2=(Button)this.findViewById(R.id.btn_order2);

        final Button btn_order3=(Button)this.findViewById(R.id.btn_order3);

        final Button btn_order4=(Button)this.findViewById(R.id.btn_order4);




        final String defaultBtnColor="#999999";

        class BtnSet {
            public void setDefault() {
                btn_order1.setBackgroundResource(R.drawable.settingbtndefault);
                btn_order2.setBackgroundResource(R.drawable.settingbtndefault);
                btn_order3.setBackgroundResource(R.drawable.settingbtndefault);
                btn_order4.setBackgroundResource(R.drawable.settingbtndefault);
                btn_order1.setTextColor(android.graphics.Color.parseColor(defaultBtnColor));
                btn_order2.setTextColor(android.graphics.Color.parseColor(defaultBtnColor));
                btn_order3.setTextColor(android.graphics.Color.parseColor(defaultBtnColor));
                btn_order4.setTextColor(android.graphics.Color.parseColor(defaultBtnColor));
            }
        }

        btn_order1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String id=btn_order1.getId()+"";
                (new BtnSet()).setDefault();

                selectorder=id;
                btn_order1.setBackgroundResource(R.drawable.settingbutton);
                btn_order1.setTextColor(Color.WHITE);
                Toast.makeText(TwoActivity.this,id,Toast.LENGTH_SHORT).show();

            }
        });

        btn_order2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String id=btn_order2.getId()+"";
                (new BtnSet()).setDefault();

                selectorder=id;
                btn_order2.setBackgroundResource(R.drawable.settingbutton);
                btn_order2.setTextColor(Color.WHITE);
                Toast.makeText(TwoActivity.this,id,Toast.LENGTH_SHORT).show();

//                float density = getResources().getDisplayMetrics().density;
//                int densityDpi = getResources().getDisplayMetrics().densityDpi;
//                Toast.makeText(TwoActivity.this,density+"",Toast.LENGTH_SHORT).show();
//                Toast.makeText(TwoActivity.this,densityDpi+"",Toast.LENGTH_SHORT).show();

            }
        });

        btn_order3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String id=btn_order3.getId()+"";
                (new BtnSet()).setDefault();

                selectorder=id;
                btn_order3.setBackgroundResource(R.drawable.settingbutton);
                btn_order3.setTextColor(Color.WHITE);
                Toast.makeText(TwoActivity.this,id,Toast.LENGTH_SHORT).show();

            }
        });

        btn_order4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String id=btn_order4.getId()+"";
                (new BtnSet()).setDefault();

                selectorder=id;
                btn_order4.setBackgroundResource(R.drawable.settingbutton);
                btn_order4.setTextColor(Color.WHITE);
                Toast.makeText(TwoActivity.this,id,Toast.LENGTH_SHORT).show();

            }
        });
    }
}
