/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


describe('test - api',()=>{
    
    it('test get 200',()=>{
        
       
          
         cy.request('GET','https://echo-serv.tbxnet.com/v1/qa/test1').then((response)=>{

            
             
          expect(response).to.have.property('status',200) 
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('ok',true) 
          
          
          
          
             
         })
 
    })
    
    it('test get Validando Valores en el Body',()=>{
        
        cy.request('GET','https://echo-serv.tbxnet.com/v1/test').then((response)=>{

            
             
            expect(response).to.have.property('status',200) 
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')  //probando que tenga los headers
            expect(response.body).to.have.property('protocol','https')
            expect(response.body).to.have.property('method','GET')
            expect(response.body).to.have.property('originalUrl','/v1/test')
            
            
            
          
            
            
            
            
               
           })
      
        
        
    })
    
      it('validando assertion con la instrunccion its',()=>{
        
        
        cy.request('GET','https://echo-serv.tbxnet.com/v1/test').its('body')
        .should('have.property','method','GET')
        
    
    
    })


    it('validando assertion con la instrunccion its estatus 200',()=>{
        
        
        cy.request('GET','https://echo-serv.tbxnet.com/v1/test').its('status')
        .should('eq', 200)
        
    
    
    })


    it('validando el estatus 500',()=>{
        
        
        cy.request({
            method: 'GET',
            url: 'https://echo-serv.tbxnet.com/v1/qa/test2',
            failOnStatusCode: false // Permite poder validar el assertion
        }).its('status')
          .should('eq', 500);
        
    
    
    })


    it('validando el estatus 401',()=>{
        
        
        cy.request({
            method: 'GET',
            url: 'https://echo-serv.tbxnet.com/v1/qa/test3',
            failOnStatusCode: false // Permite poder validar el assertion
        }).its('status')
          .should('eq', 401);
        
    
    
    })


    it('validando el schema 200',()=>{
        
       
        
      

        cy.request('GET', 'https://echo-serv.tbxnet.com/v1/qa/test1')
    .its('body')
    .then((body) => {
        // Verifica que el cuerpo de la respuesta sea un objeto
        expect(body).to.be.an('object');

        // Verifica que el objeto tenga las claves 'ok' y 'date'
        expect(body).to.have.all.keys('ok', 'date');
    });
        
    
    
    })
        
       

        
        
   

    it('validando Repuesta code 200 Post',()=>{
        
        cy.request('POST','https://echo-serv.tbxnet.com/v1/test').its('status')
        .should('eq', 200)
        
       

        
        
    })

    it('validando Repuesta code 200 Put',()=>{
        
        cy.request('PUT','https://echo-serv.tbxnet.com/v1/test').its('status')
        .should('eq', 200)
        
       

        
        
    })
    
    it('validando los headers',()=>{
        
        cy.request('POST','https://echo-serv.tbxnet.com/v1/test')
        .its('headers')   //tomando los headers
        .its('content-type')
        .should('include', 'application/json')  //asertion de primer valor del conten type
        .should('include','charset=utf-8')  //assertion del segundo valor del conten type
        
       

        
        
    })
    
   
    

    
    
})