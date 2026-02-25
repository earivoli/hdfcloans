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
 * @name rangeAmountSet
 * @param {object} fieldName
 * @param {number} text
 * @param {number} loan
 * @param {scope} globals
 */

// function rangeAmountSet(fieldName,min,max,globals){

//   console.log("Field Name:",fieldName.$data.$name)
//   console.log("Min Name:",min)
//   console.log("Max Name:",max)
//   console.log("Globals Name:",globals)

//   fieldName.min = min;
//   fieldName.max = max;

// }
/**
 * Custom submit function
 * @name saveToSession
 * @param {object} fieldName
 * @param {number} value
 * @param {scope} globals
 */
function saveToSession(fieldName,value){
  sessionStorage.setItem(fieldName,value)
  console.log(fieldName)
  sessionStorage.setItem("E",123)
  console.log("1:",sessionStorage.getItem(fieldName));
}
function calculateEMI(principal,rateofinterst,numberofmonths){
  console.log("P",principal);
  console.log("N",numberofmonths);
  console.log("R",rateofinterst)
  const r = rateofinterst / (12 * 100);
  console.log(r)
  const EMI = (principal * r * Math.pow(1 + r ),numberofmonths)/(Math.pow(1+r,numberofmonths)-1).toFixed(0);
  console.log("EMI Amount is ", EMI)
  return EMI;

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

function isValidMobileNumber(mobile){
  console.log("Mobile",mobile.length)
  if(!mobile){
    return false;
  }
  if(mobile.length==10){
    return true;
  }else{
    return false;
  }

}
function validatePANcard(pan){
  if(pan.length !=0 || !pan){
    return "length"
  }
  if(pan[3]!=='P'){
    return "not personal"
  }
  if(pan[3]==='P'){
    return "valid"
  }
}

function validateDOB(dob){

  if(!dob){
    return String(false);
  }

  const parts = dob.split("-");
  if(parts.length!=3){
    return String(false);
  }

  const day = parseInt(parts[0],10);

  const Months = parseInt(parts[1],10);

  const year = parseInt(parts[2],10);

  const datepicked = new Date(year,Months,day);
  const today = new Date();

  if(datepicked>today){
    return "feature date";
  }

  let age = today.getFullYear()-datepicked.getFullYear();

  const m = today.getMonth()-datepicked.getMonth();

  if(m<0 || (m==0 && today.getDate()<datepicked.getDate())){
    age--;
  }

  if(age<18){
    return "minor"
  }

}

// eslint-disable-next-line import/prefer-default-export
export default{ getFullName, days, submitFormArrayToString,rangeAmountSet,saveToSession,calculateEMI,returnFullCustName,returnFullAddress,isValidMobileNumber,validatePANcard,validateDOB};
