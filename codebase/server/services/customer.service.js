// import conn from "../config/db.js";
// import customerQuery from "../query/customer.query.js";

// const customerService = {
// 	getCustomerByEmail: (customerEmail, callback) => {
// 		conn.query(
// 			customerQuery.getCustomerByEmailQuery,
// 			[customerEmail],
// 			(error, result, fields) => {
// 				if (error) {
// 					console.log(error);
// 					return callback(error);
// 				} else {
// 					return callback(null, result);
// 				}
// 			}
// 		)
// 	},
// 	addTocustomer_identifier: (data, callback) => {
// 		conn.query(
// 			customerQuery.addCustomer_identifierTableQuery,
// 			[data.customer_email, data.customer_phone, data.customer_hash],
// 			(error, result, fields) => {
// 				if (error) {
// 					console.log(error);
// 					return callback(error);
// 				} else {
// 					return callback(null, result);
// 				}
// 			}
// 		);
// 	},

// 	addTocustomer_ifo: (data, callback) => {
// 		conn.query(
// 			customerQuery.addcustomer_infoTableQuery,
// 			[
// 				data.customer_id,
// 				data.customer_first_name,
// 				data.customer_last_name,
// 				data.active_customer_status,
// 			],

// 			(error, result, fields) => {
// 				if (error) {
// 					console.log(error);
// 					return callback(error);
// 				} else {
// 					return callback(null, result);
// 				}
// 			}
// 		);
// 	},

// 	allcustomer: (callback) => {
// 		conn.query(
// 			customerQuery.allCustomers_data,
// 	updatesinglecustomer: (data, callback) => {
// 		conn.query(
// 			customerQuery.updateCustomer_infoTableQuery,
// 			[
// 				data.customer_first_name,
// 				data.customer_last_name,
// 				data.active_customer_status,
// 				data.customer_id,
// 			]
// 			(error, result, fields) => {
// 				if (error) {
// 					console.log(error);
// 					return callback(error);
// 				} else {
// 					return callback(null, result);
// 				}
// 			}
// 		)
// 	}

// 	updateCustomerPhone: (data, callback) => {
// 		conn.query(
// 			customerQuery.updateCustomer_phoneQuery,
// 			[data.phone_number, data.customer_id],
// 			(error, result, fields) => {
// 				if (error) {
// 					console.log(error);
// 					return callback(error);
// 				} else {
// 					return callback(null, result);
// 				}
// 			}
// 		);
// 	},
// 	checkCustomerById: (data, callback) => {
// 		conn.query(
// 			customerQuery.selectCustomerByid,
// 			[data],

// 			(error, result, fields) => {
// 				if (error) {
// 					console.log(error);
// 					return callback(error);
// 				} else {
// 					return callback(null, result);
// 				}
// 			}
// 		);
// 	},
// };

// export default customerService;

import conn from "../config/db.js";
import customerQuery from "../query/customer.query.js";

const customerService = {
	getCustomerByEmail: (customerEmail, callback) => {
		conn.query(
			customerQuery.getCustomerByEmailQuery,
			[customerEmail],
			(error, result, fields) => {
				if (error) {
					console.log(error);
					return callback(error);
				} else {
					return callback(null, result);
				}
			}
		);
	},
	addTocustomer_identifier: (data, callback) => {
		conn.query(
			customerQuery.addCustomer_identifierTableQuery,
			[data.customer_email, data.customer_phone, data.customer_hash],
			(error, result, fields) => {
				if (error) {
					console.log(error);
					return callback(error);
				} else {
					return callback(null, result);
				}
			}
		);
	},
	addTocustomer_ifo: (data, callback) => {
		conn.query(
			customerQuery.addcustomer_infoTableQuery,
			[
				data.customer_id,
				data.customer_first_name,
				data.customer_last_name,
				data.active_customer_status,
			],
			(error, result, fields) => {
				if (error) {
					console.log(error);
					return callback(error);
				} else {
					return callback(null, result);
				}
			}
		);
	},

	updatesinglecustomer: (data, callback) => {
		conn.query(
			customerQuery.updateCustomer_infoTableQuery,
			[
				data.customer_first_name,
				data.customer_last_name,
				data.active_customer_status,
				data.customer_id,
			],
			(error, result, fields) => {
				if (error) {
					console.log(error);
					return callback(error);
				} else {
					return callback(null, result);
				}
			}
		);
	},
	updateCustomerPhone: (data, callback) => {
		conn.query(
			customerQuery.updateCustomer_phoneQuery,
			[data.phone_number, data.customer_id],
			(error, result, fields) => {
				if (error) {
					console.log(error);
					return callback(error);
				} else {
					return callback(null, result);
				}
			}
		);
	},
	checkCustomerById: (data, callback) => {
		conn.query(
			customerQuery.selectCustomerByid,
			[data],
			(error, result, fields) => {
				if (error) {
					console.log(error);
					return callback(error);
				} else {
					return callback(null, result);
				}
			}
		);
	},

	allcustomer: (callback) => {
		conn.query(
			customerQuery.allCustomers_data,

			(error, result, fields) => {
				if (error) {
					console.log(error);
					return callback(error);
				} else {
					return callback(null, result);
				}
			}
		);
	},

	deletesinglecustomer: (customer_id, callback) => {
		conn.query(
			customerQuery.deleteCustomerQuery,
			[customer_id],
			(error, result, fields) => {
				if (error) {
					console.log(error);
					return callback(error);
				} else {
					return callback(null, result);
				}
			}
		);
	},
};

export default customerService;
