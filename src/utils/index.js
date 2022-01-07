export function getRandomLinerColor(){
    let colorArr=['linear-gradient(45deg, #f43f3b, #ec008c)',
    'linear-gradient(45deg, #ff9700, #ed1c24)','linear-gradient(45deg, #39b54a, #8dc63f)','linear-gradient(45deg, #9000ff, #5e00ff)',
    'linear-gradient(45deg, #ec008c, #6739b6)','linear-gradient(45deg, #0081ff, #1cbbb4)']
    return colorArr[Math.round(Math.random()*colorArr.length)]
}
