var Vector3d = function(x, y, z) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
	}

Vector3d.prototype = {
	/**
	 * 向量的大小
	 */
	get magnitude() {
		return Math.sqrt(this.squareMagnitude);
	},
	/**
	 * 大小的平方
	 */
	get squareMagnitude() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	},
	/**
	 * 将向量标准化为模为1的标准向量
	 */
	normalize: function() {
		var magnitude = this.magnitude;
		if (magnitude) {
			this.x /= magnitude;
			this.y /= magnitude;
			this.z /= magnitude;
		}
	},
	/**
	 * 向量和标量的乘法
	 */
	scale: function(scalar) {
		return new Vector3d(this.x * scalar, 
							this.y * scalar, 
							this.z * scalar);
	},
	/**
	 * 向量和标量的乘法，影响
	 */
	scaleMutable: function() {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
	},
	/**
	 * 向量的加法，返回一个新的向量
	 */
	add: function(v) {
		return new Vector3d(this.x + v.x, 
							this.y + v.y, 
							this.z + v.z);
	},
	/**
	 * 向量的加法，在当前向量上生效
	 */
	addMutable: function(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
	},
	/**
	 * 向量的减法
	 */
	subtract: function(v) {
		return new Vector3d(this.x - v.x, 
							this.y - v.y, 
							this.z - v.z);
	},
	/**
	 * 向量减法，在当前向量上生效
	 */
	subtractMutable: function(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
	},
	/**
	 * 两个向量相乘
	 */
	multiply: function(v) {
		return new Vector3d(this.x * v.x, 
							this.y * v.y, 
							this.z * v.z);
	},
	multiplyMutable: function(v) {
		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
	},
	/**
	 * 向量的点乘
	 */
	dotProduct: function(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	},
	/**
	 * 向量的叉乘
	 */
	crossProduct: function(v) {
		return new Vector3d(this.y * v.z - this.z * v.y,
                            this.z * v.x - this.x * v.z,
                            this.x * v.y - this.y * v.x);
	}
}