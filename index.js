function setBrand() {
  switch (EdocsApi.getAttributeValue("unit").value) {
    case "89206":
      EdocsApi.setAttributeValue({ code: "Brand", value: "3", text: "VW PKW", itemCode: null, itemDictionary: "Brand" });
      EdocsApi.setAttributeValue({ code: "BrandManager", value: "89338", text: "В. В. Переверзев" });
      break;

    case "89209":
      EdocsApi.setAttributeValue({ code: "Brand", value: "1", text: "AUDI", itemCode: null, itemDictionary: "Brand" });
      EdocsApi.setAttributeValue({ code: "BrandManager", value: "89363", text: "Д. С. Штименко" });
      break;

    case "89207":
      EdocsApi.setAttributeValue({ code: "Brand", value: "2", text: "VW LNF", itemCode: null, itemDictionary: "Brand" });
      EdocsApi.setAttributeValue({ code: "BrandManager", value: "89415", text: "Ю. О. Колочун" });
      break;

    case "89214":
      EdocsApi.setAttributeValue({ code: "Brand", value: "4", text: "SEAT CUPRA", itemCode: null, itemDictionary: "Brand" });
      EdocsApi.setAttributeValue({ code: "BrandManager", value: "89398", text: "О. О. Боков" });
      break;

    default:
      EdocsApi.setAttributeValue({ code: "Brand", value: null, text: null, itemCode: null, itemDictionary: "Brand" });
      EdocsApi.setAttributeValue({ code: "BrandManager", value: null, text: null });
      break;
  }
}

function onCreate() {
  setBrand();
}

function onChangeBrand() {
  switch (EdocsApi.getAttributeValue("Brand").value) {
    case "3":
      EdocsApi.setAttributeValue({ code: "BrandManager", value: "89338", text: "В. В. Переверзев" });
      break;

    case "1":
      EdocsApi.setAttributeValue({ code: "BrandManager", value: "89363", text: "Д. С. Штименко" });
      break;

    case "2":
      EdocsApi.setAttributeValue({ code: "BrandManager", value: "89415", text: "Ю. О. Колочун" });
      break;

    case "4":
      EdocsApi.setAttributeValue({ code: "BrandManager", value: "89398", text: "О. О. Боков" });
      break;

    default:
      EdocsApi.setAttributeValue({ code: "BrandManager", value: null, text: null });
      break;
  }
}
