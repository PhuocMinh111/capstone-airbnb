export const shuffleArray = (A: any[]): any[] => {
  let result: any[] = [];
  let size = A.length;
  let num: number;
  while (A.length > 0) {
    let random = Math.floor(Math.random() * A.length);
    num = A[random];
    A.splice(random, 1);
    result.push(num);
  }
  return result;
};

export const removeAccents = (str: string): string => {
  var AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ",
    "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ",
  ];
  for (var i = 0; i < AccentsMap.length; i++) {
    var re = new RegExp("[" + AccentsMap[i].substring(1) + "]", "g");
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
};

export const getLatlong = (address: string | undefined) => {
  var geocoder = new google.maps.Geocoder();
  return geocoder.geocode({
    address: address,
  });
  // return result;
};

export const formatPrice = (price: string | undefined): string | null => {
  if (price === undefined) return null;
  let priceArr: string[] = price.split("");
  let result: string[];
  for (let i = priceArr.length; i > 0; i--) {
    if (i === priceArr.length) continue;
    if (i % 3 === 0) priceArr.splice(i, 0, ",");
  }
  return priceArr.join("");
};
