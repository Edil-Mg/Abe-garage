export default {
	getCustomerByEmailQuery: `SELECT * FROM customer_identifier WHERE customer_email = ? ; `,
	addCustomer_identifierTableQuery: `INSERT INTO customer_identifier (customer_email, customer_phone_number,customer_added_date, customer_hash)
   VALUES (?, ?,now(), ?);
   `,
	addcustomer_infoTableQuery: `INSERT INTO customer_info (customer_id, customer_first_name, customer_last_name, active_customer_status)
   VALUES (?, ?, ?, ?);
   `,

	allCustomers_data: `SELECT
    customer_info.customer_id,
    customer_info.customer_first_name AS firstName,
    customer_info.customer_last_name AS lastName,
    customer_identifier.customer_email AS email,
    customer_identifier.customer_phone_number AS phoneNumber,
    customer_identifier.customer_added_date AS addedDate,
    customer_info.active_customer_status AS active
FROM
    customer_info
JOIN
    customer_identifier
ON
    customer_info.customer_id = customer_identifier.customer_id;`,

	updateCustomer_infoTableQuery: ` UPDATE customer_info SET customer_first_name = ?, customer_last_name = ?, active_customer_status = ?
    WHERE customer_id = ?;
    `,
	updateCustomer_phoneQuery: `UPDATE customer_identifier SET customer_phone_number = ?
WHERE customer_id = ?;`,
	selectCustomerByid: `SELECT * FROM customer_identifier WHERE customer_id = ? ; `,

    deleteCustomerQuery: `DELETE FROM customer_identifier WHERE customer_id = ? ; `,

};
