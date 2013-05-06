var Particle = function() {
		this.pos = new Vector3d(0, 0, 0);
		this.velocity = new Vector3d(0, 0, 0);
		this.acceleration = new Vector3d(0, 0, 0);

		// 阻尼
		this.damping = 0;
		// 质量
		this.mass = 0;
	};

Particle.prototype.update = function(delta) {
	this.pos.addScaledVector(this.velocity, delta);
	this.pos.addScaledVector(this.acceleration, delta * delta * 0.5);

	this.velocity.multiplyMutable(this.damping).addScaledVector(this.acceleration, delta);
}