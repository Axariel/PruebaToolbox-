describe ('Navegando en la UI', () => {

    beforeEach(()=>{

        cy.visit('https://automationexercise.com/')

    })

   

    it('Prueba Registro usuario arreglada',()=>{

        const email = `test+${Date.now()}@gmail.com`; //variacion de correo para que el caso pueda ser ejecutado varias veces

        cy.RegistroUsuario('Adrian',email,'Caracas22','22',2,'1991','Adrian','Tillero','Prueba','Calle Luna','United States','Florida','Miami','33139','+18293797302');



    })

    it('Login Exitoso',()=>{

        const email = 'Adrigtr@gmail.com'; // correo Valido para ingresar
        const password ='Caracas22' //password del correo valido

        cy.login(email,password);



    })



})
