src/static-server.js/StaticServer/start
start() {
    const me = this;
    if (this.protocal === 'https') {
      pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
        if (err) {
         throw err
        }
        me.logHttpsTrusted();
        me.startServer(keys);
      })
    } else {
      me.startServer();
    }
  }
origin: slavaGanzin/http2-server
generateCertificates.js/generate
const generate = () => new Promise((resolve, reject) =>
 pem.createCertificate({
  commonName: `Certificate Authority ${address}`
 }, (e, authority) => {
  if (e) return reject(e)
  pem.createCertificate({
   commonName: address,
   serviceKey: authority.serviceKey,
   serviceCertificate: authority.certificate,
   serial: Date.now()
  }, (e2, {certificate, clientKey}) => {
   if (e2) return reject(e2)
   resolve({certificate, clientKey, authority})
  })
 })
)
 .then(save)
 .then(trust)
 .catch(error)
origin: rgcl/webpay-nodejs
lib/WebPayUniqueAndSpecialNonStandardWSSecurityCert.js/WebPayUniqueAndSpecialNonStandardWSSecurityCert/constructor
this.x509Id = "x509-" + generateId();
pem.readCertificateInfo(publicP12PEM, (pemError, pemData) => {
 if(pemError) {
  return reject(pemError);
 if(!Number.isNaN(parseInt(pemData.serial.split(" ")[0])) && pemData.serial.indexOf(":") < 0) {
  this.certSerial = pemData.serial.split(" ")[0];
 } else {
  let tokens  = pemData.serial.split(":");
  for(let i = 0; i < tokens.length; ++i) {
   this.certSerial  += ""+parseInt("0x"+tokens[i]);
 this.issuer = "C="+pemData.issuer.country+",ST="+pemData.issuer.state+",O="+pemData.issuer.organization+",L="+pemData.issuer.locality+",CN="+pemData.commonName+",OU="+pemData.organizationUnit+",emailAddress="+pemData.emailAddress;
origin: Encrypt-S/NavMorph
src/server.js/pem.createCertificate
pem.createCertificate({ days: 1, selfSigned: true }, (error, keys) => {
  if (error) {
   console.log('pem error: ' + error)
   key: keys.serviceKey,
   cert: keys.certificate,
   requestCert: false,
   rejectUnauthorized: false,
origin: micnews/apple-news
test/index.js/test
pem.createCertificate({ days: 5, selfSigned: true }, function (err, keys) {
 t.error(err);
 server = https.createServer({ key: keys.serviceKey, cert: keys.certificate }, serverHandler)
  .listen(function () {
   port = server.address().port;
