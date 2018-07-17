#### Farmer's Market

For more detail on project, see the following: [The Farmer's Market](https://gist.github.com/keithhigbee/0473b604b067a0b945ceea845dde419e).

Also, here is a live link to my project: [https://rudypenajr.github.io/farmers-market/](https://rudypenajr.github.io/farmers-market/)

#### Development
##### `npm` + `yarn`
- `npm install`
- `yarn start`

##### Docker
- `docker image build -t react:farmers-market .`
- `docker container run -it -p 3000:3000 react:farmers-market`

#### Summary | Post Mordem
For this project, I used React. I tried to do without Redux but after some struggles, I realized Redux could of been helpful.

##### The Ugly
Without a Flux/Redux, I had to pass down functions fomr my "state controller", which would be App.js.
App.js would contain "state store". This could of been vastly improved on. 

1. There was some confusion on my end due to my use of `this.products` and `this.cart` within App.js. Mentally, I saw `this.products` as a sort of inventory and "source of truth". While `this.cart` woudl act as my curren state, knowing what the consumer has placed in the cart. Despite that, I can see how that is a bit confusing.

2. `this.cart` ended up being a sort of hash which I could map against `this.products` to verify promotions. But `this.cart` still had duplicate information from `this.products` such as promotions, quantity, etc.

3. Promotion logic could improved upon. I can see plenty of holes.

4. Issue #3 could be resolved if I had modeled the data better. Specifically the promotion portion of the data model. My initial attempt nested the promotion object with it's related (promotional) object duplicated inside with the adjust price. I think that works best if the promotion applies to itself (i.e. Apples had it's own promo) but when they cross over to other products it got a bit messy. Another wrench in my logic was multiple promotions for products (i.e. Apples). Initially, I had the `promo` key as an object which I then moved over into an array of objects.

```
id: 'CH1',
name: 'Chai',
price: 3.11,
discount: 0,
promo: [{
  name: 'CHMK',
  dependent: 'MK1',
  limit: 1,
  price: 0.00,
  children: false,
  active: true
}],
alert: 'Purchase a box of Chai and get milk free. (Limit 1)'
```

5. Architecting. Rather than start coding away, I should of stepped back to visualize a UI to properly componentize the individual products. I hit a wall trying to maintain state between the counter (the plus/minus buttons on the left and right of the input for a product) and the submit button. I would of like ot have disabled the button if nothing had changed.


##### Some Good

1. For a prototype this may suffice, I believe the logic is mostly there and works accordingly. 
2. Additional information is located on the header in case the list of products gets to overwhelming. So the small Sub Total and Cart count on the top right I think are beneficial for the User.
3. Button indicator when adding to the cart.
4. Total is correct I belive. : )

#### Planned Updates
- [ ] After understanding the walls I have hit, I plan on restructing the components. 
- [ ] Adjust data logic state
- [ ] Introduce Flux or Redux