const topNavButtons = document.querySelectorAll(".top_nav_buttons");

topNavButtons.forEach((topNavButton) => {
  topNavButton.addEventListener("focus", () => {
    topNavButton.innerHTML = ``;
  });
  topNavButton.addEventListener("blur", () => {
    topNavButton.innerHTML = topNavButton.value;
  });
});











const plusCredits = document.querySelector(".plus_fed_credits");
let fedSunContainer = document.querySelector(".fed_credits");

plusCredits.addEventListener("click", () => {
  let addSuns = setInterval(() => {
    fedSunContainer.innerHTML = parseInt(fedSunContainer.innerHTML) + 1;
    modalFedsCreditsLeft.innerHTML = fedSunContainer.innerHTML
  }, 5);
  setTimeout(() => {
    clearInterval(addSuns)
  }, 2000);
});


const plusChecks = document.querySelector(".plus_fed_check");
const modalExchangeFedsContainer = document.querySelector(".modal_exchange_fed_check_container")
const closeModal = document.querySelector(".close_modal")
const modalExchangeFeds = document.querySelector(".modal_exchange_fed_check")
const amountChecksToBuy = document.querySelector(".amount_feds_checks_to_buy")
const amountChecksToBuyResult = document.querySelector(".modal_feds_check_result")
const modalFedsCreditsLeft = document.querySelector(".modal_feds_credits_left")
const modalMinusAmountFeds = document.querySelector(".modal_subtract_amount_feds")
const modalPlusAmountFeds = document.querySelector(".modal_add_amount_feds")
const modalConfirmExchangeButton = document.querySelector(".modal_confirm_exchange")
const modalExitExcangeButton = document.querySelector(".modal_exit_exchange")
const fedCheckContainer = document.querySelector(".fed_check");


// ABRIR MODAL
plusChecks.addEventListener("click", () => {
  modalExchangeFedsContainer.style.display = `flex`
});

modalExchangeFeds.addEventListener("click", () => {
  modalExchangeFedsContainer.style.display = `flex`
});

// CERRAR MODAL
closeModal.addEventListener("click", () => {
  modalExchangeFedsContainer.style.display = `none`
});

// BOTON CONFIRMAR EXCHANGE
modalConfirmExchangeButton.addEventListener("click",()=>{
  fedCheckContainer.innerHTML = parseInt(fedCheckContainer.innerHTML) + parseInt(amountChecksToBuyResult.innerHTML)

  fedSunContainer.innerHTML = parseInt(fedSunContainer.innerHTML) - parseInt(amountChecksToBuyResult.innerHTML)

  modalFedsCreditsLeft.innerHTML = fedSunContainer.innerHTML

  amountChecksToBuyResult.innerHTML = 0
  amountChecksToBuy.innerHTML = 0

  if (parseInt(fedSunContainer.innerHTML) < 0){
    fedSunContainer.innerHTML = 0
  }
})

// BOTON RESTAR
modalMinusAmountFeds.addEventListener("click",()=>{

  if(parseInt(amountChecksToBuy.innerHTML) <= 0){
    amountChecksToBuy.innerHTML = 0
  }
  else{
    amountChecksToBuy.innerHTML = parseInt(amountChecksToBuy.innerHTML) - 1
  }
  amountChecksToBuyResult.innerHTML = amountChecksToBuy.innerHTML
})



// BOTON SUMAR
modalPlusAmountFeds.addEventListener("click",()=>{

  let addChecks = setInterval(() => {

    if(parseInt(amountChecksToBuy.innerHTML) >= parseInt(modalFedsCreditsLeft.innerHTML)){
      clearInterval(addChecks)
      amountChecksToBuy.innerHTML = parseInt(modalFedsCreditsLeft.innerHTML)
      amountChecksToBuyResult.innerHTML = amountChecksToBuy.innerHTML
    }

    else{
      amountChecksToBuy.innerHTML = parseInt(amountChecksToBuy.innerHTML) + 10
      modalFedsCreditsLeft.innerHTML = fedSunContainer.innerHTML
      amountChecksToBuyResult.innerHTML = amountChecksToBuy.innerHTML
    }
  }, 5);
  setTimeout(() => {
    clearInterval(addChecks)
  }, 2000);
amountChecksToBuyResult.innerHTML = amountChecksToBuy.innerHTML
})















const items = [
  {
    id: 0,
    name: "<p>Custom Modification Optional Chest + 1</p>",
    item: `<img src="assets/items/resource_box.png">`,
  },
  {
    id: 1,
    name: "<p>Formula Shard + 600</p>",
    item: `<img src="assets/items/formula_shard.png">`,
  },
  {
    id: 2,
    name: "<p>Memory Material I + 15</p>",
    item: `<img src="assets/items/memory_material_I.png">`,
  },
  {
    id: 3,
    name: "<p>Photoetching Pen + 10</p>",
    item: `<img src="assets/items/photoetching_pen.png">`,
  },
  {
    id: 4,
    name: "<p>Aviation Wrench + 2</p>",
    item: `<img src="assets/items/aviation_wrench.png">`,
  },
];

const buttonOpenOne = document.querySelector(".button_open_one");
const buttonOpenFive = document.querySelector(".button_open_five");

const itemBoxes = document.querySelectorAll(".toy_counter_boxes");
const itemBox1 = document.querySelector(".toy_counter_box_1");
const itemBox2 = document.querySelector(".toy_counter_box_2");
const itemBox3 = document.querySelector(".toy_counter_box_3");
const itemBox4 = document.querySelector(".toy_counter_box_4");
const itemBox5 = document.querySelector(".toy_counter_box_5");

let claimable1 = undefined;
let claimable2 = undefined;
let claimable3 = undefined;
let claimable4 = undefined;
let claimable5 = undefined;

let claimed1 = false;
let claimed2 = false;
let claimed3 = false;
let claimed4 = false;
let claimed5 = false;

let voyClaimable1 = document.querySelector(".voy_claimable1");
let voyClaimable2 = document.querySelector(".voy_claimable2");
let voyClaimable3 = document.querySelector(".voy_claimable3");
let voyClaimable4 = document.querySelector(".voy_claimable4");
let voyClaimable5 = document.querySelector(".voy_claimable5");

let voyCheck1 = document.querySelector(".voy_check1");
let voyCheck2 = document.querySelector(".voy_check2");
let voyCheck3 = document.querySelector(".voy_check3");
let voyCheck4 = document.querySelector(".voy_check4");
let voyCheck5 = document.querySelector(".voy_check5");













const progressLine = document.querySelector(".progress_line");

let progressLineNumber = -41;










buttonOpenOne.addEventListener("click", () => {

  if(parseInt(fedCheckContainer.innerHTML) > 120){
    progressLineNumber = progressLineNumber + 1;
    progressLine.style.height = `${progressLineNumber}px`;

    console.log(progressLineNumber);

    verifyProgress();

    verifySpend(120)

    openBox(1);

    fedCheckContainer.innerHTML = parseInt(fedCheckContainer.innerHTML) - 120
  }
  else{
    modalExchangeFedsContainer.style.display = `flex`
  }


});

buttonOpenFive.addEventListener("click", () => {

  if(parseInt(fedCheckContainer.innerHTML) > 500){
  progressLineNumber = progressLineNumber + 5;
  progressLine.style.height = `${progressLineNumber}px`;

  console.log(progressLineNumber);

  verifyProgress();

  verifySpend(500)

  openBox(5);

  fedCheckContainer.innerHTML = parseInt(fedCheckContainer.innerHTML) - 500
  }
  else{
    modalExchangeFedsContainer.style.display = `flex`
  }
});




let spendCounter = document.querySelector(".spend_counter");
let spendCounterBlue = document.querySelector(".spend_counter_b");



const verifySpend = (num) => {
  spendCounter.innerHTML = parseInt(spendCounter.innerHTML) + num

  if(!dolarHoy){
    spendCounterBlue.innerHTML = 10 * 400 + parseInt(spendCounterBlue.innerHTML)
    console.warn("No se puede obtener acceso a la API de https://www.dolarsi.com/ ahora mismo, el valor del dólar para calcular el dinero gastado se fijará en 400 hasta recuperar el acceso")
  }

  else if(num == 500){
    spendCounterBlue.innerHTML = 10 * parseInt(dolarHoy[1].casa.compra) + parseInt(spendCounterBlue.innerHTML)
  }

  else if(num == 120){
    spendCounterBlue.innerHTML = 2 * parseInt(dolarHoy[1].casa.compra) + parseInt(spendCounterBlue.innerHTML)
  }


}





const verifyProgress = () => {
  if (progressLineNumber >= -1 && progressLineNumber < 39) {
    itemBox5.style.background = `#B99763`;
    itemBox5.style.border = `1px solid #D6B387`;

    if (claimed5 === false) {
      claimable5 = true;
      console.log("me estan tocando a mi?");
      verifyClaimable();
    }
  } else if (progressLineNumber >= 39 && progressLineNumber < 79) {
    itemBox4.style.background = `#B99763`;
    itemBox4.style.border = `1px solid #D6B387`;

    if (claimed4 == false) {
      claimable4 = true;
      verifyClaimable();
    }
  } else if (progressLineNumber >= 79 && progressLineNumber < 118) {
    itemBox3.style.background = `#B99763`;
    itemBox3.style.border = `1px solid #D6B387`;

    if (claimed3 == false) {
      claimable3 = true;
      verifyClaimable();
    }
  } else if (progressLineNumber > 118 && progressLineNumber < 159) {
    itemBox2.style.background = `#B99763`;
    itemBox2.style.border = `1px solid #D6B387`;

    if (claimed2 == false) {
      claimable2 = true;
      verifyClaimable();
    }
  } else if (progressLineNumber > 158 && progressLineNumber < 170) {
    itemBox1.style.background = `#B99763`;
    itemBox1.style.border = `1px solid #D6B387`;

    if (claimed1 == false) {
      claimable1 = true;
      verifyClaimable();
    }
  } else if (progressLineNumber > 170) {
    progressLineNumber = 170;
  }
};

const verifyClaimable = () => {
  if (claimable1 == true) {
    voyClaimable1.style.display = "block";
    itemBox1.style.cursor = `pointer`;
  } else if (claimable2 == true) {
    voyClaimable2.style.display = "block";
    itemBox2.style.cursor = `pointer`;
  } else if (claimable3 == true) {
    voyClaimable3.style.display = "block";
    itemBox3.style.cursor = `pointer`;
  } else if (claimable4 == true) {
    voyClaimable4.style.display = "block";
    itemBox4.style.cursor = `pointer`;
  } else if (claimable5 == true) {
    voyClaimable5.style.display = "block";
    itemBox5.style.cursor = `pointer`;
  }
};

itemBoxes.forEach((itembox) => {
  itembox.addEventListener("click", () => {
    if (claimable1 == true) {
      if (itembox.getAttribute("value") == 1) {

        if (claimed1 == false){
          voyCheck1.style.display = `block`;
          voyClaimable1.style.display = "none";
          itemBox1.style.cursor = `auto`;

          claimItem(items[0]);

          claimed1 = true;
        }
      }
    }
    if (claimable2 == true) {
      if (itembox.getAttribute("value") == 2) {

        if (claimed2 == false){
          voyCheck2.style.display = `block`;
          voyClaimable2.style.display = "none";
          itemBox2.style.cursor = `auto`;

          claimItem(items[2]);

          claimed2 = true;
        }
      }
    }
    if (claimable3 == true) {
      if (itembox.getAttribute("value") == 3) {

        if (claimed3 == false){
          voyCheck3.style.display = `block`;
          voyClaimable3.style.display = "none";
          itemBox3.style.cursor = `auto`;

          claimItem(items[1]);

          claimed3 = true;
        }
      }
    }
    if (claimable4 == true) {
      if (itembox.getAttribute("value") == 4) {

        if (claimed4 == false){
          voyCheck4.style.display = `block`;
          voyClaimable4.style.display = "none";
          itemBox4.style.cursor = `auto`;

          claimItem(items[3]);

          claimed4 = true;
        }
      }
    }
    if (claimable5 == true) {
      if (itembox.getAttribute("value") == 5) {

        if (claimed5 == false){
          voyCheck5.style.display = `block`;
          voyClaimable5.style.display = "none";
          itemBox5.style.cursor = `auto`;
  
          claimItem(items[4]);
  
          claimed5 = true;
        }
      }
    }
  });
});

// const claimItem = (obj) => {
//     itemBox1.innerHTML = obj.item
// }

// claimItem(items[0])

const claimItemDisplay = document.querySelector(".claim_item");

let clearItemDisplay = undefined;

const claimItem = (obj) => {
  clearTimeout(clearItemDisplay);
  claimItemDisplay.style.animationName = `undefined`;
  setTimeout(() => {
    claimItemDisplay.style.animationName = `claim_item`;
    clearItemDisplay = setTimeout(() => {
      claimItemDisplay.style.animationName = `undefined`;
    }, 2000);
  }, 100);

  claimItemDisplay.innerHTML = obj.item;
  claimItemDisplay.innerHTML += obj.name;
};


const boxOpeningVideo = document.querySelector(".box_opening_video");
const boxOpeningVideoContainer = document.querySelector(".openBox_container")

const openBox = (num) => {
  boxOpeningVideoContainer.style.animationName = `fade_in_out_video`
  boxOpeningVideoContainer.style.display = `block`
  boxOpeningVideo.play()
  setTimeout(() => {
    boxOpeningVideoContainer.style.display = `none`
    boxOpeningVideoContainer.style.animationName = ``

    showItemsGacha(num)

   },1700); 
}

const emptyBubblesCode5 = `
<div class="empty_bubbles_container">
      <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
        <!-- <div class="item_bright item_bright_empty"></div>
        <div class="item_bright item_bright_empty"></div>
        <div class="item_bright item_bright_empty"></div> -->
        <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
        </div>
        </div>
  
        <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
          <!-- <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div> -->
          <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
          </div>
        </div>
  
        <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
          <!-- <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div> -->
          <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
          </div>
        </div>
  
        <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
          <!-- <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div> -->
          <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
          </div>
        </div>
  
        <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
          <!-- <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div>
          <div class="item_bright item_bright_empty"></div> -->
          <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
          </div>
        </div>
    </div>`

const emptyBubblesCode1 = `
<div class="empty_bubbles_container">
  <div class="bubble bubble_gacha_item bubble_gacha_item_empty">
    <!-- <div class="item_bright item_bright_empty"></div>
    <div class="item_bright item_bright_empty"></div>
    <div class="item_bright item_bright_empty"></div> -->
    <div class="bubble_gacha_item_container bubble_gacha_item_container_empty">
    </div>
  </div>
</div>
`





const itemsGachaContainer = document.querySelector(".gacha_items_section")

const itemsGachaBackground = document.querySelector(".gacha_items_section_container")

const gachaDisplayInputs = document.querySelector(".gacha_display_inputs")




const emptyBubblesContainer = document.querySelector(".empty_bubbles_container")

let voy_reward = ``

showItemsGacha = (num) => {

  if(num == 5){
    itemsGachaContainer.innerHTML= emptyBubblesCode5
  }
  else{
    itemsGachaContainer.innerHTML= emptyBubblesCode1
  }

    for (let i = 0; i < num; i++) {
5
      if(parseInt(spendCounter.innerHTML) > 11000){
        voy_reward = voyGachaItems[Math.floor(Math.random()*315)]
        console.log("gasté más de 11k")
      }
      else if(parseInt(spendCounter.innerHTML) < 11000){
        if(parseInt(spendCounter.innerHTML) > 5000){
          voy_reward = voyGachaItems[Math.floor(Math.random()*310 + 5)]
          console.log("gasté más de 4k pero menos de 11k")
        }
        else{
          voy_reward = voyGachaItems[Math.floor(Math.random()*294+ 21)]
          console.log("gasté menos de 4k")
        }
      }
      

      if (voy_reward.rarity == 1){
        itemsGachaContainer.innerHTML += `
        <div class="bubble bubble_gacha_item bubble_transition">
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="bubble_gacha_item_container bubble_rarity_1">
            <img class="voy_gacha_n${voy_reward.id}" src="${voy_reward.item}" alt="">
            <p>${voy_reward.name}&nbsp;x${voy_reward.amount}</p>
          </div>
        </div>`
      }
      else if (voy_reward.rarity == 2){
        itemsGachaContainer.innerHTML += `
        <div class="bubble bubble_gacha_item bubble_transition">
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="bubble_gacha_item_container bubble_rarity_2">
            <img class="voy_gacha_n${voy_reward.id}" src="${voy_reward.item}" alt="">
            <p>${voy_reward.name}&nbsp;x${voy_reward.amount}</p>
          </div>
        </div>`
      }
      else if (voy_reward.rarity == 3 || voy_reward.rarity == 3.5){
        itemsGachaContainer.innerHTML += `
        <div class="bubble bubble_gacha_item bubble_transition">
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="bubble_gacha_item_container bubble_rarity_3">
            <img class="voy_gacha_n${voy_reward.id}" src="${voy_reward.item}" alt="">
            <p>${voy_reward.name}&nbsp;x${voy_reward.amount}</p>
          </div>
        </div>`
      }
      else if (voy_reward.rarity == 4){
        itemsGachaContainer.innerHTML += `
        <div class="bubble bubble_gacha_item bubble_transition">
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="item_bright"></div>
          <div class="bubble_gacha_item_container bubble_rarity_4">
            <img class="voy_gacha_n${voy_reward.id}" src="${voy_reward.item}" alt="">
            <p>${voy_reward.name}&nbsp;x${voy_reward.amount}</p>
          </div>
        </div>`
      }

    }

    itemsGachaBackground.style.display = `flex`

    gachaDisplayInputs.style.display = `flex`
}



// BOTONES DE LA GACHA DISPLAY  

const buttonOpenFiveGacha = document.querySelector(".open5_gacha_button");

const buttonBackGacha = document.querySelector(".back_gacha_button")

buttonBackGacha.addEventListener("click",()=>{
  itemsGachaBackground.style.display = `none`
  gachaDisplayInputs.style.display = `none`
  itemsGachaContainer.innerHTML = ``
})


buttonOpenFiveGacha.addEventListener("click",()=>{

  if(parseInt(fedCheckContainer.innerHTML) > 500){
    progressLineNumber = progressLineNumber + 5;
    progressLine.style.height = `${progressLineNumber}px`;
  
    console.log(progressLineNumber);
  
    verifyProgress();
  
    verifySpend(500)
  
    openBox(5);
  
    fedCheckContainer.innerHTML = parseInt(fedCheckContainer.innerHTML) - 500

    setTimeout(() => {
      itemsGachaBackground.style.display = `none`
      gachaDisplayInputs.style.display = `none`
      itemsGachaContainer.innerHTML = ``
    }, 500);

    }
    else{
      alert("te quedaste pobre mi pana, que hacemos ahora?")
    }
})




// PRECIO DOLAR HOY

let dolarHoy = ``

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  .then(response => response.json())
  // .then(data => {dolarHoy = data; console.log(dolarHoy[1].casa.compra)})

  // ESTE DE ARRIBA ES EL DOLAR BLUE (CREO)

  .then(data => {dolarHoy = data; console.log(dolarHoy[1].casa.compra)})
  





