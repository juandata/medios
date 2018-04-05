export function productApiRequestHelper(reqType, baseUrl, body){
  /*Helper function to make the requests to the Product API
  */
  switch (reqType) {
    case "Create":
    var h = Array.from(body);
    return (reqType + " " + baseUrl + " " +  h );
    break;
    case "Read Specific":
    return (reqType + " " + baseUrl );
    break;
    case "Read All":
    return (reqType + " " + baseUrl );
    break;
    default:

  }
}
