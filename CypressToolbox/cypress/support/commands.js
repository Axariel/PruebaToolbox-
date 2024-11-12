// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });



    Cypress.Commands.add('RegistroUsuario',(name,email,password,dia,mes,year,firstName,lastName,Company,address,country,state,city,zipcode,number)=>{
    
        cy.fixture('RegistroUsuarioLocators').then((index)=>{  //una vez q me has traido el json index con el alias index 

            cy.contains('Signup / Login').click()
              cy.get(index.name).type(name);
              cy.get(index.email).type(email)
              cy.get(index.BotonSingup).click()
              cy.get(index.WelcomeMessage).should('have.text','Enter Account Information') //assertion para validar que estamos en el formulario de registro
              cy.log('Una vez en el formulario se procede a colocar nombre y email')
              cy.get(index.GenderLock).check()
              cy.get(index.GenderLock).should('be.checked') //assertion para validar que el campo este checked
              cy.get(index.password).type(password)
              cy.get(index.DayForm).find(index.days).select(dia) //para poder encontrar el campo que seleciona el dia, se utilizo el find para dentro del formulario uniform day poder hacer el select
              cy.get(index.DayForm).find(index.days).should('have.value',dia)
              cy.get(index.MonthForm).find(index.months).select(mes)
              cy.get(index.MonthForm).find(index.months).should('have.value',mes)
              cy.get(index.YearForm).find(index.years).select(year)
              cy.get(index.news).check() 
              cy.get(index.news).should('be.checked')
              cy.get(index.FirstName).type(firstName)
              cy.get(index.FirstName).should('have.value',firstName) //assertion para validar el valor contra la variable
              cy.get(index.LastName).type(lastName)
              cy.get(index.LastName).should('have.value',lastName)    //assertion para validar el valor contra la variable
              cy.get(index.Company).type(Company)    
              cy.get(index.Company).should('have.value',Company)     //assertion para validar el valor contra la variable
              cy.get(index.address).type(address)
              cy.get(index.address).should('have.value',address)   //assertion para validar el valor contra la variable
              cy.get(index.country).select(country)
              cy.get(index.country).should('have.value',country) //assertion para validar el valor contra la variable
              cy.get(index.state).type(state)
              cy.get(index.state).should('have.value',state) //assertion para validar el valor contra la variable
              cy.get(index.city).type(city)
              cy.get(index.city).should('have.value',city) //assertion para validar el valor contra la variable
              cy.get(index.zipcode).type(zipcode)
              cy.get(index.zipcode).should('have.value',zipcode)  //assertion para validar el valor contra la variable
              cy.get(index.mobile_number).type(number)
              cy.get(index.mobile_number).should('have.value',number)
              cy.get(index.Botoncreate).click()
              cy.get(index.MensajeExitoso).should('have.text','Account Created!')  //assertion para validar que se creo el usuario


             //cy.get(RegistroUsuarioLocators.searchBoton).click();
             
                        
          })
          
          
          
      
  })


  Cypress.Commands.add('login',(email, password)=>{
    
    cy.fixture('Login').then((index)=>{
              
              cy.contains('Signup / Login').click()
              cy.get(index.email).type(email);
              cy.get(index.password).type(password);
              cy.get(index.BotonLogin).click();
              cy.get(index.Mensaje).should('contains.text','Logged in as') //validamos mensaje de bienvenida
              
             
              
          })
    
  })