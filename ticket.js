import{initializeApp}from'https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js';
import{getFirestore,doc,getDoc}from'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';
import{firebaseConfig}from'./firebase-config.js';
const $=s=>document.querySelector(s),v=Number(new URLSearchParams(location.search).get('b'));
if(!(v>=1&&v<=70)){show('--','BOLETO NO VÁLIDO','El enlace no contiene un número válido.','used');}
else{const n=String(v).padStart(2,'0');$('#n').textContent=n;$('#admin').href='admin/?b='+n;document.title='Boleto '+n;try{const db=getFirestore(initializeApp(firebaseConfig)),snap=await getDoc(doc(db,'tickets',n));if(snap.exists()&&snap.data().used===true){let d=snap.data().usedAt?.toDate?.();show(n,'❌ BOLETO YA UTILIZADO',d?'Registrado: '+d.toLocaleString('es-MX'):'Este acceso ya fue registrado.','used');}else show(n,'✅ BOLETO VÁLIDO','¡Disfruta de la fiesta! 🎉','valid');}catch(e){show(n,'NO SE PUDO VERIFICAR','Revisa la conexión o las reglas de Firestore.','used');console.error(e)}}
function show(n,s,d,c){$('#n').textContent=n;$('#status').textContent=s;$('#status').className='status '+c;$('#detail').textContent=d}
