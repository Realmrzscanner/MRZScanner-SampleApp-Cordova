

                document.getElementById("startScanner").addEventListener("click", startScanner);
       
      function successfulScan(successfulMrzScan){
        
             document.getElementById("sunameTxt").value = successfulMrzScan.surname;
            
             document.getElementById("givenNameTxt").value = successfulMrzScan.given_names_readale;
            
             document.getElementById("documentNumberTxt").value = successfulMrzScan.document_number;
            
             document.getElementById("issuingCountryTxt").value = successfulMrzScan.issuing_country;
            
             document.getElementById("nationalityTxt").value = successfulMrzScan.nationality;
            
             document.getElementById("DOBTxt").value = successfulMrzScan.dob_readable;
            
             document.getElementById("sexTxt").value = successfulMrzScan.sex;
            
             document.getElementById("estimatedIDTxt").value = successfulMrzScan.est_issuing_date_eadable;
            
             document.getElementById("expirationDateTxt").value = successfulMrzScan.expiration_date_eadable;
            
             document.getElementById("optionalValueTxt").value = successfulMrzScan.optionals;
    
    }
           function startScanner(){
             debugger;

           Cordova.exec(successfulScan,null,"MrzScanner", "startScanner", null);
      }
    
