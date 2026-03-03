import console from "node:console";

/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Custom submit function
 * @param {scope} globals
 */
function submitFormArrayToString(globals) {
  const data = globals.functions.exportData();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key] = data[key].join(',');
    }
  });
  globals.functions.submitForm(data, true, 'application/json');
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}



/**
 * Custom submit function
 * @name saveToSession
 * @param {object} fieldName
 * @param {number} value
 * @param {scope} globals
 */
function saveToSession(fieldName,value){
  sessionStorage.clear();
  sessionStorage.setItem(fieldName,value)
  console.log(fieldName)
  sessionStorage.setItem("E",123)
  console.log("1:",sessionStorage.getItem(fieldName));
}
function calculateEMI(principal,rateofinterst,numberofmonths){
  console.log("P",principal);
  console.log("N",numberofmonths);
  console.log("R",rateofinterst)
  if(typeof principal == "string"){
    principal = Number(principal.replace(/[₹,]/g,""));
    console.log("New Principal",principal)
  }
  const r = rateofinterst / (12 * 100);
  console.log(r)
  const EMI = (principal * r * Math.pow(1 + r ),numberofmonths)/(Math.pow(1+r,numberofmonths)-1).toFixed(0);
  const roundOff = EMI.toFixed(0);
  const formatted = roundOff.toLocaleString("en-IN",{
    maximumFractionDigits:0,
    style : "currency",
    currency:"INR"
  });
  return formatted;
}
function returnFullCustName(fName,Lname){
  const fullName = String(fName)+ " " +String(Lname);
  console.log("Full Name is::-",fullName)
  return fullName;
}

function returnFullAddress(address1,address2,address3,state,city,zip){
  const fullAddress = String(address1) + " " + String(address2) + " " + String(address3) + " " + String(state) + " " + String(zip);
  console.log("Full Address is_::-",fullAddress);
  return fullAddress;
}



/**
 * Custom submit function
 * @name rangeAmountSet
 * @param {object} fieldName
 * @param {number} text
 * @param {number} loan
 * @param {scope} globals
 */
function rangeAmountSet(fieldName,min,max,globals){

  console.log("Field Name2:",fieldName._data.$_name)
  console.log("Min Name:",min)
  console.log("Max Name:",max)
  console.log(fieldName)

  fieldName.min = min;
  fieldName.max = max;


  globals.field.range1771698422113.min=10;
    globals.field.range1771698422113.max=2345;
     globals.field.range1771698422113.val=2345;
     
        //  console.log("Globals Name:",globals.field.range1771698422113.val)

            console.log("Globals Name:",globals.field)


  fieldName._jsonModel.minimum = 1000;
  fieldName._jsonModel.maximum = 100000;

  console.log(fieldName.min)
  console.log(fieldName.max)

  const input = fieldName._data?.element?.querySelector('input') || fieldName.element?.querySelector('input') ;
  console.log(input)


}
/*
 * Custom submit function
 * @name saveToSession
 * @param {object} fieldName
 * @param {scope} globals
 */
function setFormDatatoSession(fieldName){
  //sma
 console.log("field::-",fieldName);
}



/**
* Masks the first 5 digits of the mobile number with *
* @param {*} mobileNumber
* @returns {string} returns the mobile number with first 5 digits masked
*/
function maskMobileNumber(mobileNumber) {
  console.log("Value",mobileNumber)
  if (!mobileNumber) {
    return '';
  }
  const value = mobileNumber.toString();
  // Mask first 5 digits and keep the rest
  return ` ${'*'.repeat(5)}${value.substring(5)}`;
}

/*
 * Custom submit function
 * @name combineMobileWithCountryCode
 * @param {object} code
 * @param {object} mobile
 */
function combineMobileWithCountryCode(code,mobile){
  console.log("country + mobile",code,mobile)
}
function validateOTP(otp){
   const regex = /^[0-9]{6}$/;
  if(!otp){
    return false;
  }
  return regex.test(otp);
}
function validatePhoneNumber(phone){
  const REGEX_PATTERN = /^[6-9]\d{9}$/;
  if(!phone){
    return false;
  }
  console.log("validated..",typeof(phone))
  if(phone.length == 10 && REGEX_PATTERN.test(phone)){
    return true;
  }else{
    return false;
  }
}
function validatePAN(pan){
  const number = String(pan).toUpperCase();
  const regexTest = /^[A-Z]{3}P[A-Z][0-9]{4}[A-Z]$/;
  return regexTest.test(number);
}

function returnAsINRAmount(amount){
  if(!amount){
    return ''
  }
  const formatted = amount.toLocaleString("en-IN",{
    maximumFractionDigits:0,
    style : "currency",
    currency:"INR"
  });
  console.log("Formateed String",formatted);
  return formatted;
}
function isValidAge(birthYear) {
  console.log("Birth Year is",birthYear,typeof(birthYear))
  const Year = parseInt(birthYear.split("-")[0],10)
  console.log("Year From String",Year);
  const currentYear = new Date().getFullYear();
  const age = currentYear - Year;
  if (age >=18 && age<=60) {
    console.log("PASS")
    return true;
  }
  return false;
}
// eslint-disable-next-line import/prefer-default-export
export default{ getFullName, days, submitFormArrayToString,rangeAmountSet,saveToSession,calculateEMI,returnFullCustName,returnFullAddress,maskMobileNumber,rangeAmountSet,setFormDatatoSession,combineMobileWithCountryCode,validateOTP,validatePhoneNumber,validatePAN,returnAsINRAmount,isValidAge};
