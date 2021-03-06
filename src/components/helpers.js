// Method return a random number from 0 to 255  
const rgbValue = () => {
  return Math.floor(Math.random() * 256)
}

// Method generates an array of rgb colors 
const generateColors = (value) => {
  let colorFs = [{ color: 'White', number: '0.2046' },
  { color: 'SaddleBrown', number: '0.1306' },
  { color: 'Black', number: '0.1286' },
  { color: 'RosyBrown', number: '0.1075' },
  { color: 'Gray', number: '0.0965' },
  { color: 'Tan', number: '0.0720' },
  { color: 'LightGray', number: '0.0601' },
  { color: 'SlateGray', number: '0.0395' },
  { color: 'Thistle', number: '0.0378' },
  { color: 'IndianRed', number: '0.0317' },
  { color: 'RebeccaPurple', number: '0.0316' },
  { color: 'Lavender', number: '0.0083' },
  { color: 'LightBlue', number: '0.0060' },
  { color: 'Crimson', number: '0.0058' },
  { color: 'DarkKhaki', number: '0.0057' },
  { color: 'Indigo', number: '0.0046' },
  { color: 'PeachPuff', number: '0.0043' },
  { color: 'DarkBlue', number: '0.0034' },
  { color: 'DarkGreen', number: '0.0031' },
  { color: 'MediumPurple', number: '0.0027' },
  { color: 'Violet', number: '0.0027' },
  { color: 'MediumAquamarine', number: '0.0024' },
  { color: 'SlateBlue', number: '0.0024' },
  { color: 'DarkRed', number: '0.0024' },
  { color: 'LightSalmon', number: '0.0023' },
  { color: 'Pink', number: '0.0021' },

  ];

  let colorTopFs = [{ color: 'White', number: '0.2' },
  { color: 'RosyBrown', number: '0.1333' },
  { color: 'SaddleBrown', number: '0.12' },
  { color: 'LightGray', number: '0.1066' },
  { color: 'Black', number: '0.0933' },
  { color: 'IndianRed', number: '0.08' },
  { color: 'Gray', number: '0.08' },
  { color: 'Tan', number: '0.0533' },
  { color: 'SlateGray', number: '0.04' },
  { color: 'RebeccaPurple', number: '0.0266' },
  { color: 'PeachPuff', number: '0.0266' },
  { color: 'LightBlue', number: '0.0133' },
  { color: 'Indigo', number: '0.0133' },
  { color: 'Thistle', number: '0.0133' },];


  let dressColorFs = [{ color: 'White', number: '0.2040' },
  { color: 'SaddleBrown', number: '0.1344' },
  { color: 'RosyBrown', number: '0.1071' },
  { color: 'Gray', number: '0.1065' },
  { color: 'Black', number: '0.1023' },
  { color: 'LightGray', number: '0.0765' },
  { color: 'Tan', number: '0.0739' },
  { color: 'Thistle', number: '0.0407' },
  { color: 'IndianRed', number: '0.0294' },
  { color: 'SlateGray', number: '0.0246' },
  { color: 'RebeccaPurple', number: '0.0224' },
  { color: 'Lavender', number: '0.0160' },
  { color: 'Crimson', number: '0.0085' },
  { color: 'Indigo', number: '0.0058' },
  { color: 'DarkKhaki', number: '0.0053' },
  { color: 'DarkRed', number: '0.0048' },
  { color: 'PeachPuff', number: '0.0048' },
  { color: 'LightBlue', number: '0.0048' },
  { color: 'MediumAquamarine', number: '0.0042' },
  { color: 'LightSalmon', number: '0.0042' },
  { color: 'DarkGreen', number: '0.0037' },
  { color: 'DarkBlue', number: '0.0037' },
  { color: 'Aquamarine', number: '0.0032' },
  { color: 'MediumPurple', number: '0.0026' },
  { color: 'Bisque', number: '0.0026' },
  { color: 'Violet', number: '0.0026' },];

  let jacketColorFs = [{ color: 'White', number: '0.2020' },
  { color: 'Black', number: '0.1579' },
  { color: 'SaddleBrown', number: '0.1231' },
  { color: 'RosyBrown', number: '0.1091' },
  { color: 'Gray', number: '0.0940' },
  { color: 'Tan', number: '0.0696' },
  { color: 'LightGray', number: '0.0545' },
  { color: 'SlateGray', number: '0.0418' },
  { color: 'RebeccaPurple', number: '0.0336' },
  { color: 'Thistle', number: '0.0290' },
  { color: 'IndianRed', number: '0.0185' },
  { color: 'LightBlue', number: '0.0092' },
  { color: 'Violet', number: '0.0069' },
  { color: 'DarkKhaki', number: '0.0069' },
  { color: 'Lavender', number: '0.0058' },
  { color: 'Indigo', number: '0.0058' },
  { color: 'PeachPuff', number: '0.0046' },
  { color: 'Tomato', number: '0.0034' },
  { color: 'Crimson', number: '0.0034' },
  { color: 'DarkGreen', number: '0.0034' },
  { color: 'DarkBlue', number: '0.0034' },
  { color: 'Khaki', number: '0.0034' },
  { color: 'MediumPurple', number: '0.0034' },
  { color: 'Orange', number: '0.0023' },
  { color: 'Turquoise', number: '0.0023' },
  { color: 'SlateBlue', number: '0.0011' },
  ];

  let jumpColorFs = [{ color: 'White', number: '0.2030' },
  { color: 'Black', number: '0.1321' },
  { color: 'SaddleBrown', number: '0.1149' },
  { color: 'Gray', number: '0.1031' },
  { color: 'RosyBrown', number: '0.1009' },
  { color: 'LightGray', number: '0.0698' },
  { color: 'Tan', number: '0.0698' },
  { color: 'RebeccaPurple', number: '0.0386' },
  { color: 'SlateGray', number: '0.0365' },
  { color: 'Thistle', number: '0.0354' },
  { color: 'IndianRed', number: '0.0332' },
  { color: 'Crimson', number: '0.0107' },
  { color: 'LightBlue', number: '0.0064' },
  { color: 'DarkBlue', number: '0.0053' },
  { color: 'MediumPurple', number: '0.0053' },
  { color: 'DarkGreen', number: '0.0053' },
  { color: 'Lavender', number: '0.0042' },
  { color: 'MediumAquamarine', number: '0.0042' },
  { color: 'Magenta', number: '0.0032' },
  { color: 'Orange', number: '0.0032' },
  { color: 'DarkKhaki', number: '0.0032' },
  { color: 'SlateBlue', number: '0.0021' },
  { color: 'Indigo', number: '0.0021' },
  { color: 'LightSalmon', number: '0.0021' },
  { color: 'Tomato', number: '0.0021' },
  { color: 'PeachPuff', number: '0.0021' },];

  let skirtColorFs = [{ color: 'White', number: '0.2033' },
  { color: 'SaddleBrown', number: '0.1512' },
  { color: 'Black', number: '0.1105' },
  { color: 'RosyBrown', number: '0.1033' },
  { color: 'Gray', number: '0.0910' },
  { color: 'Tan', number: '0.0897' },
  { color: 'LightGray', number: '0.0576' },
  { color: 'IndianRed', number: '0.0402' },
  { color: 'Thistle', number: '0.0321' },
  { color: 'SlateGray', number: '0.0309' },
  { color: 'RebeccaPurple', number: '0.0186' },
  { color: 'Lavender', number: '0.0101' },
  { color: 'DarkKhaki', number: '0.0088' },
  { color: 'Crimson', number: '0.0076' },
  { color: 'PeachPuff', number: '0.0063' },
  { color: 'Tomato', number: '0.0055' },
  { color: 'Magenta', number: '0.0046' },
  { color: 'LightBlue', number: '0.0042' },
  { color: 'LightSalmon', number: '0.0038' },
  { color: 'Khaki', number: '0.0029' },
  { color: 'Bisque', number: '0.0029' },
  { color: 'Orange', number: '0.0029' },
  { color: 'OrangeRed', number: '0.0029' },
  { color: 'Salmon', number: '0.0029' },
  { color: 'DarkGreen', number: '0.0025' },
  { color: 'Pink', number: '0.0025' }];


  let kimonoColorFs = [{ color: 'White', number: '0.2045' },
  { color: 'SaddleBrown', number: '0.1261' },
  { color: 'Black', number: '0.1181' },
  { color: 'RosyBrown', number: '0.1002' },
  { color: 'Gray', number: '0.0953' },
  { color: 'Tan', number: '0.0754' },
  { color: 'LightGray', number: '0.0536' },
  { color: 'IndianRed', number: '0.0476' },
  { color: 'Thistle', number: '0.0377' },
  { color: 'SlateGray', number: '0.0357' },
  { color: 'RebeccaPurple', number: '0.0337' },
  { color: 'Crimson', number: '0.0158' },
  { color: 'LightBlue', number: '0.0069' },
  { color: 'DarkKhaki', number: '0.0069' },
  { color: 'Lavender', number: '0.0059' },
  { color: 'Salmon', number: '0.0059' },
  { color: 'Tomato', number: '0.0039' },
  { color: 'MediumAquamarine', number: '0.0039' },
  { color: 'SlateBlue', number: '0.0039' },
  { color: 'DarkBlue', number: '0.0029' },
  { color: 'LightSalmon', number: '0.0029' },
  { color: 'Orange', number: '0.0029' },
  { color: 'Indigo', number: '0.0029' },
  { color: 'Magenta', number: '0.0019' },
  { color: 'MediumVioletRed', number: '0.0019' },
  { color: 'PaleVioletRed', number: '0.0019' },];

  let pantsColorFs = [{ color: 'White', number: '0.2032' },
  { color: 'Black', number: '0.1351' },
  { color: 'SaddleBrown', number: '0.1211' },
  { color: 'RosyBrown', number: '0.1087' },
  { color: 'Gray', number: '0.0929' },
  { color: 'LightGray', number: '0.0756' },
  { color: 'Tan', number: '0.0688' },
  { color: 'SlateGray', number: '0.0410' },
  { color: 'RebeccaPurple', number: '0.0365' },
  { color: 'Thistle', number: '0.0334' },
  { color: 'IndianRed', number: '0.0274' },
  { color: 'Lavender', number: '0.0097' },
  { color: 'LightBlue', number: '0.0060' },
  { color: 'Crimson', number: '0.0056' },
  { color: 'PeachPuff', number: '0.0048' },
  { color: 'DarkKhaki', number: '0.0041' },
  { color: 'DarkRed', number: '0.0037' },
  { color: 'LightSalmon', number: '0.0033' },
  { color: 'Indigo', number: '0.0030' },
  { color: 'Violet', number: '0.0026' },
  { color: 'DarkBlue', number: '0.0022' },
  { color: 'Bisque', number: '0.0022' },
  { color: 'SlateBlue', number: '0.0022' },
  { color: 'Magenta', number: '0.0018' },
  { color: 'MediumAquamarine', number: '0.0018' },
  { color: 'Pink', number: '0.0018' },];

  switch (value) {
    case '1':

      return colorFs;
    case '2':

      return colorTopFs;
    case '3':



      return dressColorFs;
    case '4':




      return jacketColorFs;
    case '5':

      return jumpColorFs;
    case '6':



      return skirtColorFs;
    case '7':


      return kimonoColorFs;
    case '8':


      return pantsColorFs;
  }









  // for(let i=0; i<num; i++){ 
  //   const red = rgbValue() 
  //   const blue = rgbValue() 
  //   const green = rgbValue() 
  //   colors.push( 
  // } 
  return colorFs
}

const generateColorInsta = (value) => {


  let colorTopIn = [{ color: ' White', number: '0.3008' },
  { color: ' SaddleBrown', number: '0.1544' },
  { color: ' RosyBrown', number: '0.1463' },
  { color: ' Black', number: '0.1138' },
  { color: ' IndianRed', number: '0.0813' },
  { color: ' Gray', number: '0.0243' },
  { color: ' Tan', number: '0.0243' },
  { color: ' RebeccaPurple', number: '0.0243' },
  { color: ' DarkKhaki', number: '0.0162' },
  { color: ' PaleVioletRed', number: '0.0162' },
  { color: ' LightCyan', number: '0.0162' },
  { color: ' LightGray', number: '0.0081' },
  { color: ' SlateGray', number: '0.0081' },
  { color: ' PeachPuff', number: '0.0081' },
  { color: ' Lavender', number: '0.0081' },
  { color: ' Magenta', number: '0.0081' },
  { color: ' DarkGreen', number: '0.0081' },
  { color: ' Salmon', number: '0.0081' },
  { color: ' Yellow', number: '0.0081' },
  { color: ' LightBlue', number: '0.0081' },
  { color: ' Crimson', number: '0.0081' },
  ];


  let colorsInsta = [{ color: ' White', number: '0.3178' },
  { color: ' SaddleBrown', number: '0.1642' },
  { color: ' RosyBrown', number: '0.1239' },
  { color: ' Black', number: '0.1195' },
  { color: ' Gray', number: '0.0988' },
  { color: ' IndianRed', number: '0.0409' },
  { color: ' Tan', number: '0.0295' },
  { color: ' RebeccaPurple', number: '0.0207' },
  { color: ' SlateGray', number: '0.0182' },
  { color: ' Lavender', number: '0.0119' },
  { color: ' LightGray', number: '0.0062' },
  { color: ' PaleVioletRed', number: '0.0056' },
  { color: ' Thistle', number: '0.0050' },
  { color: ' Violet', number: '0.0044' },
  { color: ' DarkKhaki', number: '0.0044' },
  { color: ' DarkRed', number: '0.0037' },
  { color: ' LightBlue', number: '0.0031' },
  { color: ' DarkGreen', number: '0.0031' },
  { color: ' Indigo', number: '0.0031' },
  { color: ' LightCyan', number: '0.0025' },
  { color: ' DarkBlue', number: '0.0025' },
  { color: ' LimeGreen', number: '0.0025' },
  { color: ' Crimson', number: '0.0018' },
  { color: ' PeachPuff', number: '0.0018' },
  { color: ' MediumPurple', number: '0.0018' },
  { color: ' Olive', number: '0.0018' },];

  let pantsColorIn = [{ color: ' White', number: '0.3243' },
  { color: ' SaddleBrown', number: '0.1471' },
  { color: ' RosyBrown', number: '0.1141' },
  { color: ' Gray', number: '0.1021' },
  { color: ' Black', number: '0.1021' },
  { color: ' IndianRed', number: '0.0360' },
  { color: ' SlateGray', number: '0.0360' },
  { color: ' RebeccaPurple', number: '0.0330' },
  { color: ' Tan', number: '0.0240' },
  { color: ' Thistle', number: '0.0120' },
  { color: ' LightBlue', number: '0.0090' },
  { color: ' PaleVioletRed', number: '0.0090' },
  { color: ' LightGray', number: '0.0090' },
  { color: ' Lavender', number: '0.0060' },
  { color: ' Olive', number: '0.0060' },
  { color: ' LightGreen', number: '0.0030' },
  { color: ' DarkKhaki', number: '0.0030' },
  { color: ' Aquamarine', number: '0.0030' },
  { color: ' Cyan', number: '0.0030' },
  { color: ' MediumAquamarine', number: '0.0030' },
  { color: ' LightSalmon', number: '0.0030' },
  { color: ' Violet', number: '0.0030' },
  { color: ' DarkGreen', number: '0.0030' },
  { color: ' Indigo', number: '0.0030' },
  { color: ' DarkRed', number: '0.0030' },];

  let kimonoColorIn = [{ color: ' White', number: '0.3333' },
  { color: ' SaddleBrown', number: '0.1969' },
  { color: ' RosyBrown', number: '0.0909' },
  { color: ' Gray', number: '0.0909' },
  { color: ' IndianRed', number: '0.0757' },
  { color: ' Black', number: '0.0606' },
  { color: ' Tan', number: '0.0303' },
  { color: ' PaleVioletRed', number: '0.0303' },
  { color: ' MediumPurple', number: '0.0151' },
  { color: ' SlateGray', number: '0.0151' },
  { color: ' RebeccaPurple', number: '0.0151' },
  { color: ' Olive', number: '0.0151' },
  { color: ' Crimson', number: '0.0151' },
  { color: ' DarkRed', number: '0.0151' },];

  let skirtColorIn = [{ color: ' White', number: '0.3333' },
  { color: ' SaddleBrown', number: '0.1805' },
  { color: ' RosyBrown', number: '0.1666' },
  { color: ' Black', number: '0.1111' },
  { color: ' Gray', number: '0.0972' },
  { color: ' RebeccaPurple', number: '0.0277' },
  { color: ' Thistle', number: '0.0277' },
  { color: ' Tan', number: '0.0277' },
  { color: ' PaleVioletRed', number: '0.0138' },
  { color: ' IndianRed', number: '0.0138' },
  ];

  let jumpColorIn = [{ color: ' White', number: '0.3333' },
  { color: ' Gray', number: '0.1594' },
  { color: ' Black', number: '0.1449' },
  { color: ' SaddleBrown', number: '0.0869' },
  { color: ' RosyBrown', number: '0.0869' },
  { color: ' Tan', number: '0.0289' },
  { color: ' LightGray', number: '0.0289' },
  { color: ' RebeccaPurple', number: '0.0289' },
  { color: ' SlateBlue', number: '0.0144' },
  { color: ' DarkBlue', number: '0.0144' },
  { color: ' Indigo', number: '0.0144' },
  { color: ' DarkRed', number: '0.0144' },
  { color: ' Gold', number: '0.0144' },
  { color: ' PaleVioletRed', number: '0.0144' },
  { color: ' IndianRed', number: '0.0144' },];


  let jacketColorIn = [{ color: ' White', number: '0.3333' },
  { color: ' SaddleBrown', number: '0.1688' },
  { color: ' Black', number: '0.1298' },
  { color: ' RosyBrown', number: '0.1255' },
  { color: ' Gray', number: '0.1038' },
  { color: ' Tan', number: '0.0346' },
  { color: ' RebeccaPurple', number: '0.0216' },
  { color: ' SlateGray', number: '0.0173' },
  { color: ' IndianRed', number: '0.0129' },
  { color: ' DarkKhaki', number: '0.0086' },
  { color: ' DarkRed', number: '0.0043' },
  { color: ' MediumPurple', number: '0.0043' },
  { color: ' MediumAquamarine', number: '0.0043' },
  { color: ' SlateBlue', number: '0.0043' },
  { color: ' DarkGreen', number: '0.0043' },
  { color: ' LightGray', number: '0.0043' },
  { color: ' Violet', number: '0.0043' },
  { color: ' LimeGreen', number: '0.0043' },
  { color: ' Crimson', number: '0.0043' },
  { color: ' Thistle', number: '0.0043' },];


  let dressColorIn = [{ color: ' White', number: '0.3070' },
  { color: ' Gray', number: '0.1491' },
  { color: ' SaddleBrown', number: '0.1403' },
  { color: ' Black', number: '0.1315' },
  { color: ' RosyBrown', number: '0.1140' },
  { color: ' IndianRed', number: '0.0438' },
  { color: ' Tan', number: '0.0263' },
  { color: ' Violet', number: '0.0175' },
  { color: ' RebeccaPurple', number: '0.0175' },
  { color: ' Lavender', number: '0.0087' },
  { color: ' LightCyan', number: '0.0087' },
  { color: ' DarkBlue', number: '0.0087' },
  { color: ' Blue', number: '0.0087' },
  { color: ' LightGray', number: '0.0087' },
  { color: ' LimeGreen', number: '0.0087' },];

  switch (value) {
    case '1':
      return colorsInsta;
    case '2':
      return colorTopIn;
    case '3':
      return dressColorIn;
    case '4':
      return jacketColorIn;
    case '5':
      return jumpColorIn;
    case '6':
      return skirtColorIn;
    case '7':
      return kimonoColorIn;
    case '8':
      return pantsColorIn;
  }

  return colorsInsta;
}

// colourNameToHex(colour)
// {
//     var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
//     "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
//     "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
//     "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
//     "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
//     "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
//     "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
//     "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
//     "honeydew":"#f0fff0","hotpink":"#ff69b4",
//     "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
//     "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
//     "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
//     "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
//     "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
//     "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
//     "navajowhite":"#ffdead","navy":"#000080",
//     "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
//     "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
//     "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
//     "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
//     "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
//     "violet":"#ee82ee",
//     "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
//     "yellow":"#ffff00","yellowgreen":"#9acd32"};

//     if (typeof colours[colour.toLowerCase()] != 'undefined')
//         return colours[colour.toLowerCase()];

//     return false;
// }

export { rgbValue, generateColors, generateColorInsta }