app.service("Agenda", function() {
  this.compare = function() {
    console.log("success");
  };


  this.isFilled = function() {
    if (
      this.selectedFinancialCode != null &&
      this.selectedCommitmentCode != null &&
      this.wpsElements != null
    ) {      
    console.log('Filled');
      return true;
    }
    console.log('Not Filled');
    return false;
  };

    this.elementCollection = [
      {
        name:"WPS",
        initial:"100",
        actual: "200"
      },
      {
        name:"Koszty zastępstwa w egzekucji",
        initial:"505",
        actual: "5000"
      },
      {
        name:"Koszta Procesu egzekucji",
        initial:"154",
        actual: "4546"
      },
      {
        name:"Koszty klauzuli na małżonka",
        initial:"56",
        actual: "5645"
      },
      {
        name:"Opłaty",
        initial:"456",
        actual: "1201"
      },
      {
        name:"Prowizja",
        initial:"4564",
        actual: "45643"
      }
    ];
  this.elements = [
    {
      name: "Button1"
    },
    {
      name: "Button2"
    },
    {
      name: "Button3"
    },
    {
      name: "Button4"
    },
    {
      name: "Button5"
    },
    {
      name: "Button6"
    }
  ];
  this.wpsElements = [];

  this.processCostsElements = [];

  this.bailiffCostsElements = [];

  this.selectedFinancialCode;
  this.selectedCommitmentCode;
  this.interestElement;

  this.financeCodes = [
    {
      name: "bank1"
    },
    {
      name: "bank2"
    },
    {
      name: "bank3"
    },
    {
      name: "bank4"
    }
  ];

  this.commitmentCodes = [
    {
      name: "kod1"
    },
    {
      name: "kod2"
    },
    {
      name: "kod3"
    },
    {
      name: "kod4"
    }
  ];
});
