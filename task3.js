const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
// console.log(members);

// 初始化狀態
// let purchaseRecords = [
//     {
//         name : '會員名字',
//         courses : 1,
//         unitPrice : 100,
//         totalPrice : 1000
//     }
// ];

let purchaseRecords = [];
// console.log(purchaseRecords);

// 流程
//Phase 1
function addPurchaseRecord(name, sessions){
    // console.log(name, sessions)

    // 防呆
    if((name == undefined) || (name == "") || (typeof(sessions) !== "number") || (sessions <= 0)){
        console.log("輸入錯誤，請輸入有效的會員名稱和課程數量。");
        return;
    }
    
    // 購買數量套用優惠價格
    let unitPrice = 0;
    if(sessions <=10){
        unitPrice = 1500;
    }else if(sessions <= 20){
        unitPrice = 1300;
    }else{
        unitPrice = 1100;
    }
    // console.log(unitPrice);

    // 計算總價
    const totalPrice = unitPrice * sessions;
    // console.log(totalPrice);
    
    // 將資料寫入到陣列purchaseRecords
    purchaseRecords.push({
        name: name,
        sessions: sessions,
        unitPrice: unitPrice,
        totalPrice: totalPrice
    });
    // console.log(purchaseRecords)

    // 印出
    // 新增購買記錄成功！會員 [會員名稱] 購買 [數量] 堂課，總金額為 [金額] 元。
    console.log(`新增購買記錄成功！會員 ${name} 購買 ${sessions} 堂課，總金額為 ${totalPrice} 元。`);
    
};

//Phase 2
function calculateTotalPrice(){
    let totalPrice = 0;
    purchaseRecords.forEach(function(record){
        totalPrice += record.totalPrice;
    })
    console.log(`目前總營業額為 ${totalPrice} 元`);
}

//Phase 3
function filterNoPurchaseMember(){
    const purchaseMemberName = []; // ['Alice','Bob'...]
    purchaseRecords.forEach(function(record){
        purchaseMemberName.push(record.name);
    })
    // console.log(purchaseMemberName);
    const noPurchaseMembers = members.filter(function(member){
        return purchaseMemberName.includes(member) === false; // 再想一下這邊的邏輯
    })
    // console.log(noPurchaseMembers);
    console.log(`未購買課程的會員有： ${noPurchaseMembers}`);
}

//執行
addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("測試人", -1);
calculateTotalPrice();
filterNoPurchaseMember();
// console.log(purchaseRecords)
