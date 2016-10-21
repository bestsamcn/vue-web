<template>
	<div class="router-view">
		<validator name="signinValidate">
		<div class="form">
		    <h4>signIn</h4>
			<ul>
				<li>
					<input type="text" name="name" placeholder="id">
				</li>
				<li>
					<input type="password" name="password" placeholder="password">
				</li>
				<li>
					<a href="javascript:;">signIn</a>
				</li>
			</ul>
			<p class="to-signup">
			   <a v-link="{path:'/sign/signUp'}">to signUp?</a>
			</p>
		</div>
	    </validator>
	</div>
</template>
<script>
	export default {
		components:{
		}
	}
</script>
<style>
	.form{
		width:100%;
		font-size: 14px;
	}
	.form h4{
		text-align:center;
		line-height: 50px;
	}
	.form ul li{
		width:100%;
		margin-bottom: 10px;
	}
	.form ul li input{
		width:100%;
		border:none;
		box-shadow: none;
		border-bottom:1px solid #ddd;
		color:#333;
		height: 30px;
		outline: none;
		text-indent: 5px;
		background:none;
	}
	.form ul li a{
		display: block;
		width:100%;
		height:40px;
		line-height: 40px;
		text-align:center;
		background:#ddd;
		color:#fff;
	}
	.form ul li a.active{
		background:#0090ff;
	}
	.form .to-signup{
        text-align: center;
        margin-top:20px;
	}
	.form .to-signup a{
		color:#0090ff;
	}
</style>