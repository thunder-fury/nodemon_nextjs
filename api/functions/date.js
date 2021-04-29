const setDate = () => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth()+1;
  let week = new Date().getDay();
  let day = new Date().getDate();
  let yobi= new Array("日","月","火","水","木","金","土");
  
  let date = year+ +month+ +day+ +yobi[week]+"曜日";
  
  return date

}

exports.setDate = setDate