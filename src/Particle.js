var Particle = function() {
		this.pos = new Vector3d(0, 0, 0);
		this.velocity = new Vector3d(0, 0, 0);
		this.acceleration = new Vector3d(0, 0, 0);

		// 阻尼
		this.damping = 0;
		// 质量
		this.mass = 0;
	};

/**
 * 更新粒子参数
 */
Particle.prototype.update = function(delta) {
	// 更新位置
	this.pos.addScaledVector(this.velocity, delta);
	this.pos.addScaledVector(this.acceleration, delta * delta * 0.5);

	// 更新速度
	this.velocity.multiplyMutable(this.damping).addScaledVector(this.acceleration, delta);
};

/**
 * 渲染粒子
 */
Particle.prototype.draw = function(context) {
	context.beginPath();
	context.arc(this.pos.x, this.pos.y, 8, 0, 2 * Math.PI);
	context.fillStyle = "red";
	context.fill();
	context.closePath();
};