<?php


$_openid = $_GET["openid"];
$_datetime = $_GET["datetime"];//传递时间码02221023 分别代表月份日期小时分钟

  $arr = array(
      'state' => '0'
  );

	//state 0 表示已经兑过奖了  1 表示兑奖成功   2表示兑奖过期了     测试的时候可以直接修改数值，测试效果

  $json_string = json_encode($arr);

    echo $json_string;

?>