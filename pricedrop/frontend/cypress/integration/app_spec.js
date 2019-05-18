describe("Django REST framework / React quickstart app", () => {

    const item = {
        name: "item test 1",
        url: "test.com",
        original_price: 22.00,
        current_price: 22.00,
        date_added: "2019-01-01",
        price_div: "default",
    };

    before(() => {
        cy.exec("npm run dev");
        cy.exec("npm run flush");
    });

    it("should be able to see the table", () =>{
        cy.visit("/");
        cy.get("tr").contains(`${item.name}${item.url}${item.original_price}${item.current_price}`);
    });

    it("should be able to fill a web form", () =>{

        cy.visit("/");

        cy
        .get('input[name="name"]')
        .type(item.name)
        .should("have.value", item.name);
        
        cy
        .get('input[name="url"]')
        .type(item.url)
        .should("have.value", item.url);

        cy
        .get('input[name="original_price"]')
        .type(item.original_price)
        .should("have.value", item.original_price);
        
        cy
        .get('input[name="original_price"]')
        .type(item.current_price)
        .should("have.value", item.current_price);

        cy
        .get('input[name="date_added"]')
        .type(item.date_added)
        .should("have.value", item.date_added);

        cy
        .get('input[name="price_div"]')
        .type(item.price_div)
        .should("have.value", item.price_div);

        cy.get("form").submit();

    });

    //more tests here

});