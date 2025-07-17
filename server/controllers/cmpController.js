const cmpModel = require("../models/companyModel");

const createCompanyController = async (req, res) => {
    try {
        //access and validate for empty data
        const {name, createdBy, currency, address, date} = req.body;
        if(!name || !createdBy || !currency || !address || !date){
            return res.status(400).send({
                success : false,
                message: "All fields need to be filled ."
            })
        }

        //send data to the database server for the record of new company 
        const cmp = await new cmpModel({name, createdBy, currency, address, financialYear:date}).save();
        if(!cmp){
           return res.status(500).send({
                success: false,
                message: "Something went wrong creating the company.Try again"
            })
        }

        res.status(200).send({
            success: true,
            message: "Company has been created successfully.",
            company: cmp
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something wrong in creating company",
            error: error.message
        })
    }
}

const getAllCompanyController = async (req, res) => {
    try {
        const companies = await cmpModel.find({});
        if(companies.length === 0){
            return res.send({
                success: true,
                message: "There are no companies created at all."
            })
        }
        res.status(200).send({
            success: true,
            message: "Company list fetch success",
            companies
        });
        
    } catch (error) {
         res.status(500).send({
            success: false,
            message: "Something wrong in getting all company list",
            error: error.message
        })
    }
}

exports.createCompanyController = createCompanyController;
exports.getAllCompanyController = getAllCompanyController;
