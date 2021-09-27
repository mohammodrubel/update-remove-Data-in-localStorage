

const addToDb = (item)=>{
    const database = getDb()
        if (item in database){
            database [item] = database[item] + 1
        }else{
            database [item] = 1
        }
    saveToDb(database)
}

const getDb= ()=>{
    const previousDataToDatabase = localStorage.getItem('shopingCart')
    const updateValue = JSON.parse(previousDataToDatabase)
    return updateValue
}

// remove item 

const removeItem = (item) =>{
    const database = getDb()
    delete database[item]
    saveToDb(database)
}

// save database 
const saveToDb = db =>{
    const newDatabase = JSON.stringify(db)
    localStorage.setItem('shopingCart',newDatabase)
}