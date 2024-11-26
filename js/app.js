/**
 * 
 *  BIG TASKS
 * -----------------------------
 *  - load items
 *  - select items
 *  - return selected items
 */

class MenuForm {

    constructor() {
        // access DOM elements
        this.person = document.getElementById('person').value
        this.meatRow = document.getElementById('meatRow')
        this.sidesRow = document.getElementById('sidesRow')
        this.dessertsRow = document.getElementById('dessertsRow')
        this.drinksRow = document.getElementById('drinksRow')
        this.foodList = document.getElementById('foodList')

        // create array of food items
        this.menu = [
            {
                id: 1,
                type: 'meat',
                item: 'fried turkey',
                imgUrl: 'fried_turkey.jpeg',
                isChecked: false,
                madeBy: 'Mom'
            },
            {
                id: 2,
                type: 'meat',
                item: 'honey ham',
                imgUrl: 'honey_ham.jpeg',
                isChecked: false,
                madeBy: 'Tymer'
            },
            {
                id: 3,
                type: 'meat',
                item: 'prime rib',
                imgUrl: 'prime_rib2.jpeg',
                isChecked: false,
                madeBy: 'Dillon'
            },
            {
                id: 4,
                type: 'meat',
                item: 'roasted duck',
                imgUrl: 'roasted_duck.jpeg',
                isChecked: false,
                madeBy: 'Jordan'
            },
            {
                id: 5,
                type: 'sides',
                item: 'dressing',
                imgUrl: 'dressing.jpeg',
                isChecked: false,
                madeBy: 'Chloe'
            }, 
            {
                id: 6, 
                type: 'sides',
                item: 'mac and cheese',
                imgUrl: 'mac_cheese.jpeg',
                isChecked: false,
                madeBy: 'Timber'
            },
            {
                id: 7,
                type: 'sides',
                item: 'collard greens',
                imgUrl: 'greens.jpeg',
                isChecked: false,
                madeBy: 'Dillon'
            },
            {
                id: 8,
                type: 'sides',
                item: 'buttered rolls',
                imgUrl: 'buttered_rolls.jpeg',
                isChecked: false,
                madeBy: 'Tymer'
            }, 
            {
                id: 9, 
                type: 'sides',
                item: 'green beans',
                imgUrl: 'green_beans.jpeg',
                isChecked: false,
                madeBy: 'Dillon'
            },
            {
                id: 10,
                type: 'sides',
                item: 'mash potatoes',
                imgUrl: 'mash_potatoes.jpeg',
                isChecked: false,
                madeBy: 'Chloe'
            }, 
            {
                id: 11,
                type: 'sides',
                item: 'candied yams',
                imgUrl: 'candied_yams.jpeg',
                isChecked: false,
                madeBy: 'Mom'
            },
            {
                id: 12, 
                type: 'sides',
                item: 'cornbread',
                imgUrl: 'cornbread.jpeg',
                isChecked: false,
                madeBy: 'Chloe'
            },
            {
                id: 13,
                type: 'desserts',
                item: 'pecan pie',
                imgUrl: 'pecan_pie.jpeg',
                isChecked: false,
                madeBy: 'Jordan'
            }, 
            {
                id: 14,
                type: 'desserts',
                item: 'red velvet cake',
                imgUrl: 'red_velvet_cake.jpeg',
                isChecked: false,
                madeBy: 'Mom'
            },
            {
                id: 15,
                type: 'desserts',
                item: 'sour cream cake',
                imgUrl: 'sour_cream.jpeg',
                isChecked: false,
                madeBy: 'Jordan'
            },
            {
                id: 16,
                type: 'desserts',
                item: 'chocolate ice cream',
                imgUrl: 'ice_cream.jpeg',
                isChecked: false
            },
            {
                id: 17,
                type: 'drinks',
                item: 'sweet tea',
                imgUrl: 'sweet_tea.jpeg',
                isChecked: false
            },
            {
                id: 18,
                type: 'drinks',
                item: 'cranberry soda',
                imgUrl: 'cranberry_soda.jpeg',
                isChecked: false
            },
            {
                id: 19,
                type: 'drinks',
                item: 'beer',
                imgUrl: 'beer.jpeg',
                isChecked: false
            },
            {
                id: 20,
                type: 'drinks',
                item: 'apple cider',
                imgUrl: 'apple_cider.jpeg',
                isChecked: false
            }
        ]

        this.plate = {
            person: '',
            meat: [],
            sides: [],
            desserts: [],
            drinks: ''
        }
    }

    init() {
        // console.log("intialized")
        this.buildFigures(this.menu)
    }

    loadItems(el, child) {
        el.appendChild(child)
    }

    buildFigures(arr) {

        arr.forEach(obj => {
            //for each object build a figure
            // console.log(obj.hasOwnProperty('madeBy'))
            const column = document.createElement('div')
            column.classList.add('col')
            column.innerHTML = `
                <div class="figure-div" data-isChecked=${obj.isChecked}>
                    <figure class="figure item-figure">
                        <img src="images/${obj.imgUrl}" alt="placeholder img" class="img-fluid image figure-img food-image w-100 rounded" />
                        <figcaption class="figure-caption food-caption">${obj.hasOwnProperty('madeBy') ? obj.madeBy : ''}<figcaption>
                    </figure>
                    <h3 class="food-heading text-capitalize">${obj.item}</h3>
                    <div class="form-check">
                        <input 
                            type="checkbox" 
                            name="${obj.type}" 
                            id="${obj.type}-${obj.id}" 
                            value="${obj.item}"        
                            class="form-check-input" 
                        /> 
                        <label 
                            for="${obj.type}-${obj.id}" 
                            class="form-check-label text-capitalize">${obj.item}
                        </label>
                    </div>
                </div>
            `

            // console.log(column)

            // this.rows.forEach( row => {
            //     this.loadItems(row, column)
            // })
            switch(obj.type) {
                case 'meat':
                    this.loadItems(this.meatRow, column)
                    break
                case 'sides':
                    this.loadItems(this.sidesRow, column)
                    break
                case 'desserts':
                    this.loadItems(this.dessertsRow, column)
                    break
                case 'drinks':
                        this.loadItems(this.drinksRow, column)
                    break
                default:
                    return 'error'
            }
        });
    }

    buildPlate() {
        const person = document.getElementById('person').value
        const checkboxes = document.querySelectorAll('input[type=checkbox]')
        const fooditems = document.querySelectorAll('.figure-div')

        checkboxes.forEach(checkbox => {
            const name = checkbox.name
            const value = checkbox.value
            if (checkbox.checked) {
                // console.log(checkbox.value)
                this.plate = {
                    ...this.plate,
                    person,
                    [name]: [...this.plate[name],value]
                }

                this.menu.forEach(item => {
                    if (checkbox.value == item.item) {
                        item.isChecked = checkbox.checked
                    }
                })
            }
        })
        // console.log(checkboxes)
        // console.log(this.plate)
        const personPlate = document.getElementById('personPlate')
        personPlate.innerText = `${this.plate.person}'s`

        this.makeReceipt(this.menu)
    }

    makeReceipt(arr) {

        for (let i = 0;  i < arr.length; i++) {
            if (arr[i].isChecked) {
                const listItem = document.createElement('li')
                listItem.classList.add('list-group-item')
                listItem.innerText = arr[i].item
                
                this.foodList.appendChild(listItem)
                
            }
            
        }
    }
}

const submitBtn = document.getElementById('submitBtn')

const action = new MenuForm()
action.init()

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    // console.log('click')
    action.buildPlate()
})

// let obj = {
//     a: 1, 
//     b: 2,
//     c: 3
// }

// for (prop in obj) {
//     console.log(obj[prop] * 3)
// }