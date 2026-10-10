const IMG={"night": "images/night.jpg", "villa": "images/villa.jpg", "model": "images/model.jpg", "estate": "images/estate.jpg", "interior": "images/interior.jpg", "logo": "images/logo.webp", "emblem": "images/emblem.webp"};
const T={en:{tag:"Design · Build · Own",rt0:"Documents",rt1:"Fee calculator",rt2:"Book appointment",docs:["Draft sale deed","Seller ID and address proof","Buyer ID and address proof","Property tax receipts","Encumbrance certificate","Khasra / Khatauni extract","Passport photographs","NOC from authority, if required"],d_prog:(a,b)=>a+" of "+b+" documents ready",
c_val:"Property value (₹)",c_state:"State",c_buyer:"Buyer",c_m:"Male",c_f:"Female",c_stamp:"Stamp duty",c_reg:"Registration fee",c_tot:"Total payable",c_note:"Sample rates for demo. Confirm current rates with your sub-registrar office.",a_phone:"Mobile number (10 digits)",a_btn:"Book appointment",a_ok:a=>"Booked! ID "+a.id+" · "+a.o+" · "+a.d+" at "+a.s,
m_rev:"Customer reviews",m_inq:"Send inquiry",inq:"Inquiry sent. The professional will contact you soon.",revs:["★★★★★ Rohit S.: Clear communication and on-time delivery.","★★★★☆ Neha G.: Fair pricing and very professional."],
add_btn:"Add listing",add_h:"Publish to the marketplace",add_t:"Title (e.g. 3 BHK villa designs)",add_p:"Starting price (₹)",add_d:"Short description",add_go:"Publish",flash:"Published! Find it in the marketplace on the home page.",dappt:a=>"Appointment "+a.id+": "+a.o+", "+a.d+" at "+a.s,nav4:"3D design studio",cancel:"Cancel",g_h:"Generate a 3D model of your home",g_p:"Enter your plot size and needs. Get a 3D model you can rotate, in seconds. Your first design is free.",g_w:"Plot width (m)",g_d:"Plot depth (m)",g_fl:"Floors",g_bd:"Bedrooms",g_st:"Style",st_mod:"Modern, flat roof",st_cls:"Classic, sloped roof",st_vil:"Villa with pool",g_bal:"Balcony",g_gar:"Garage",g_btn:"Generate 3D model",
g_free:"1 free design available",g_used:"Free design used · ₹199 per design",g_empty:"Enter your plot details and generate your model. Drag to rotate, scroll to zoom.",g_plot:"Plot",g_built:"Built-up area",g_cov:"Ground coverage",g_set:"Setbacks: front 3 m, sides 1.5 m, rear",g_tight:"This plot is tight for that many bedrooms. Try fewer bedrooms or more floors.",g_ok:"The layout fits your plot.",g_ref:"Style reference",g_hire:"Hire an architect for this plot",g_err:"The 3D viewer could not load. Check your connection.",
gp_h:"Your free design is used",gp_p:"Each new 3D design costs ₹199. Pay once and generate instantly.",gp_btn:"Pay ₹199 and generate (demo)",nav1:"Find professionals",nav2:"Pricing",nav3:"Land registration",login:"Log in",signup:"Sign up",logout:"Log out",
badge:"Verified architects, builders and land dealers",h1a:"Your one-stop platform for architecture, verified land,",h1b:"and government registration.",
sub:"Hire a trusted architect or builder, buy clear-title land, and register your property with step-by-step guidance.",
o_all:"All services",o_arch:"Architect",o_build:"Builder",o_land:"Land Dealer",o_reg:"Property Registration",c_all:"Any city",search:"Search",
m1:"Verified professionals",m2:"Projects delivered",m3:"Registrations completed",browse:"Browse by service",
res_h:"Featured on the platform",res_n:n=>n+(n===1?" result":" results"),none:"No matches. Try another service or city.",view:"View and hire",
e_h:"Free to join. We earn only when you get paid.",e_p:"Customers pay into a secure escrow. When the work is approved, the professional receives the payment minus a 2% platform fee.",
e_note:"No listing fees. No subscription. 2% per completed payment.",e_lbl:"Deal amount (₹)",pay:"Customer pays",fee:"ArchiVerse fee (2%)",recv:"Professional receives",
pay_btn:"Pay into escrow (demo)",ok:"Payment held in escrow. It is released to the professional when you approve the milestone.",
reg_h:"Register your land with confidence",reg_p:"Know the documents, stamp duty and fees before you visit the sub-registrar office, then book your slot here.",
s1:"Check documents and title",s2:"Calculate stamp duty and fees",s3:"Book a sub-registrar appointment",
r_cust:"Customer",d_customer:"Hire professionals, buy land or register property.",d_architect:"Showcase your portfolio and win design projects.",d_builder:"Bid on construction projects and show your work.",d_land:"List verified land and reach serious buyers.",
t_login:"Welcome back",t_signup:"Create your account",b_login:"Log in",b_signup:"Create account",sw_l:"New here?",sw_s:"Already registered?",
ph_name:"Full name or business name",ph_lic:"License / RERA number (for verification)",ph_email:"Email address",ph_pass:"Password (min 6 characters)",demo:"Demo only: no real account is created.",
hello:n=>"Welcome, "+n,dash:{customer:"Customer dashboard",architect:"Architect dashboard",builder:"Builder dashboard",land:"Land dealer dashboard"},
d_h:"Your activity",d_note:"Messages and analytics are coming soon.",
st:{customer:["Active requests","Saved professionals","Registrations in progress"],architect:["New inquiries","Portfolio projects","Payout this month"],builder:["New inquiries","Active projects","Payout this month"],land:["New inquiries","Live listings","Payout this month"]},
dl_c:["Villa design request: 2 proposals received","Saved: Ar. Meera Kapoor","Registration: documents under review"],dl_p:["Inquiry: new client in Noida","Reply to 3 pending inquiries","Verification: license under review"],
dpay_c:a=>"Escrow: "+inr(a)+" held until you approve the milestone",dpay_p:(a,f)=>"Payment received "+inr(a)+": ArchiVerse fee "+inr(f)+", you get "+inr(a-f),swl:"हिन्दी"},
hi:{tag:"डिज़ाइन · निर्माण · स्वामित्व",rt0:"दस्तावेज़",rt1:"शुल्क कैलकुलेटर",rt2:"अपॉइंटमेंट बुक करें",docs:["बिक्री विलेख का ड्राफ़्ट","विक्रेता का पहचान व पते का प्रमाण","खरीदार का पहचान व पते का प्रमाण","संपत्ति कर की रसीदें","भार-मुक्त प्रमाणपत्र","खसरा / खतौनी की नक़ल","पासपोर्ट साइज़ फ़ोटो","प्राधिकरण से NOC, यदि आवश्यक हो"],d_prog:(a,b)=>b+" में से "+a+" दस्तावेज़ तैयार",
c_val:"संपत्ति का मूल्य (₹)",c_state:"राज्य",c_buyer:"खरीदार",c_m:"पुरुष",c_f:"महिला",c_stamp:"स्टाम्प ड्यूटी",c_reg:"पंजीकरण शुल्क",c_tot:"कुल देय",c_note:"डेमो के लिए नमूना दरें। वर्तमान दरें अपने उप-पंजीयक कार्यालय से पुष्ट करें।",a_phone:"मोबाइल नंबर (10 अंक)",a_btn:"अपॉइंटमेंट बुक करें",a_ok:a=>"बुक हो गया! आईडी "+a.id+" · "+a.o+" · "+a.d+", "+a.s,
m_rev:"ग्राहक समीक्षाएँ",m_inq:"पूछताछ भेजें",inq:"पूछताछ भेज दी गई। पेशेवर जल्द संपर्क करेंगे।",revs:["★★★★★ रोहित एस.: साफ़ संवाद और समय पर काम।","★★★★☆ नेहा जी.: उचित दाम और बहुत पेशेवर।"],
add_btn:"लिस्टिंग जोड़ें",add_h:"मार्केटप्लेस में प्रकाशित करें",add_t:"शीर्षक (जैसे 3 BHK विला डिज़ाइन)",add_p:"शुरुआती कीमत (₹)",add_d:"संक्षिप्त विवरण",add_go:"प्रकाशित करें",flash:"प्रकाशित हो गया! होम पेज पर मार्केटप्लेस में देखें।",dappt:a=>"अपॉइंटमेंट "+a.id+": "+a.o+", "+a.d+", "+a.s,nav4:"3D डिज़ाइन स्टूडियो",cancel:"रद्द करें",g_h:"अपने घर का 3D मॉडल बनाएँ",g_p:"अपने प्लॉट का आकार और ज़रूरतें भरें। कुछ ही सेकंड में घुमाया जा सकने वाला 3D मॉडल पाएँ। पहला डिज़ाइन मुफ़्त है।",g_w:"प्लॉट की चौड़ाई (मी)",g_d:"प्लॉट की गहराई (मी)",g_fl:"मंज़िलें",g_bd:"बेडरूम",g_st:"शैली",st_mod:"मॉडर्न, सपाट छत",st_cls:"क्लासिक, ढलान वाली छत",st_vil:"पूल वाला विला",g_bal:"बालकनी",g_gar:"गैराज",g_btn:"3D मॉडल बनाएँ",
g_free:"1 मुफ़्त डिज़ाइन उपलब्ध",g_used:"मुफ़्त डिज़ाइन उपयोग हो चुका · ₹199 प्रति डिज़ाइन",g_empty:"अपने प्लॉट का विवरण भरें और मॉडल बनाएँ। घुमाने के लिए खींचें, ज़ूम के लिए स्क्रॉल करें।",g_plot:"प्लॉट",g_built:"निर्मित क्षेत्र",g_cov:"ज़मीन पर कवरेज",g_set:"सेटबैक: आगे 3 मी, बगल 1.5 मी, पीछे",g_tight:"इतने बेडरूम के लिए यह प्लॉट छोटा है। बेडरूम कम करें या मंज़िलें बढ़ाएँ।",g_ok:"यह लेआउट आपके प्लॉट में फिट होता है।",g_ref:"शैली का संदर्भ",g_hire:"इस प्लॉट के लिए आर्किटेक्ट हायर करें",g_err:"3D व्यूअर लोड नहीं हो सका। कनेक्शन जाँचें।",
gp_h:"आपका मुफ़्त डिज़ाइन उपयोग हो चुका है",gp_p:"हर नए 3D डिज़ाइन का शुल्क ₹199 है। एक बार भुगतान करें और तुरंत बनाएँ।",gp_btn:"₹199 भुगतान करें और बनाएँ (डेमो)",nav1:"विशेषज्ञ खोजें",nav2:"शुल्क",nav3:"भूमि पंजीकरण",login:"लॉग इन",signup:"साइन अप",logout:"लॉग आउट",
badge:"सत्यापित आर्किटेक्ट, बिल्डर और भूमि डीलर",h1a:"आर्किटेक्चर, सत्यापित ज़मीन और सरकारी पंजीकरण के लिए",h1b:"आपका एकमात्र प्लेटफ़ॉर्म।",
sub:"भरोसेमंद आर्किटेक्ट या बिल्डर चुनें, साफ़ टाइटल की ज़मीन खरीदें और चरण-दर-चरण मार्गदर्शन से संपत्ति पंजीकृत कराएँ।",
o_all:"सभी सेवाएँ",o_arch:"आर्किटेक्ट",o_build:"बिल्डर",o_land:"भूमि डीलर",o_reg:"संपत्ति पंजीकरण",c_all:"कोई भी शहर",search:"खोजें",
m1:"सत्यापित पेशेवर",m2:"पूरे हुए प्रोजेक्ट",m3:"पूरे हुए पंजीकरण",browse:"सेवा के अनुसार देखें",
res_h:"प्लेटफ़ॉर्म पर चुनिंदा",res_n:n=>n+" परिणाम",none:"कोई परिणाम नहीं। दूसरी सेवा या शहर चुनें।",view:"देखें और हायर करें",
e_h:"जुड़ना मुफ़्त है। कमाई तभी, जब आपको भुगतान मिले।",e_p:"ग्राहक सुरक्षित एस्क्रो में भुगतान करता है। काम स्वीकृत होने पर पेशेवर को 2% प्लेटफ़ॉर्म शुल्क काटकर राशि मिलती है।",
e_note:"कोई लिस्टिंग शुल्क नहीं, कोई सब्सक्रिप्शन नहीं। हर पूरे भुगतान पर 2%।",e_lbl:"सौदे की राशि (₹)",pay:"ग्राहक भुगतान करता है",fee:"ArchiVerse शुल्क (2%)",recv:"पेशेवर को मिलता है",
pay_btn:"एस्क्रो में भुगतान करें (डेमो)",ok:"भुगतान एस्क्रो में सुरक्षित है। आपके माइलस्टोन स्वीकार करने पर पेशेवर को जारी होगा।",
reg_h:"भरोसे के साथ अपनी ज़मीन का पंजीकरण करें",reg_p:"उप-पंजीयक कार्यालय जाने से पहले दस्तावेज़, स्टाम्प ड्यूटी और शुल्क जानें, फिर यहीं स्लॉट बुक करें।",
s1:"दस्तावेज़ और टाइटल जाँचें",s2:"स्टाम्प ड्यूटी और शुल्क की गणना करें",s3:"उप-पंजीयक अपॉइंटमेंट बुक करें",
r_cust:"ग्राहक",d_customer:"पेशेवर हायर करें, ज़मीन खरीदें या संपत्ति पंजीकृत करें।",d_architect:"अपना पोर्टफ़ोलियो दिखाएँ और डिज़ाइन प्रोजेक्ट पाएँ।",d_builder:"निर्माण प्रोजेक्ट पर बोली लगाएँ और अपना काम दिखाएँ।",d_land:"सत्यापित ज़मीन सूचीबद्ध करें और गंभीर खरीदार पाएँ।",
t_login:"वापसी पर स्वागत है",t_signup:"अपना खाता बनाएँ",b_login:"लॉग इन करें",b_signup:"खाता बनाएँ",sw_l:"नए हैं?",sw_s:"पहले से पंजीकृत हैं?",
ph_name:"पूरा नाम या व्यवसाय का नाम",ph_lic:"लाइसेंस / RERA नंबर (सत्यापन के लिए)",ph_email:"ईमेल पता",ph_pass:"पासवर्ड (कम से कम 6 अक्षर)",demo:"केवल डेमो: कोई वास्तविक खाता नहीं बनता।",
hello:n=>"स्वागत है, "+n,dash:{customer:"ग्राहक डैशबोर्ड",architect:"आर्किटेक्ट डैशबोर्ड",builder:"बिल्डर डैशबोर्ड",land:"भूमि डीलर डैशबोर्ड"},
d_h:"आपकी गतिविधि",d_note:"मैसेज और एनालिटिक्स जल्द आएँगे।",
st:{customer:["सक्रिय अनुरोध","सहेजे गए पेशेवर","चालू पंजीकरण"],architect:["नई पूछताछ","पोर्टफ़ोलियो प्रोजेक्ट","इस माह का भुगतान"],builder:["नई पूछताछ","सक्रिय प्रोजेक्ट","इस माह का भुगतान"],land:["नई पूछताछ","लाइव लिस्टिंग","इस माह का भुगतान"]},
dl_c:["विला डिज़ाइन अनुरोध: 2 प्रस्ताव मिले","सहेजा गया: आर्. मीरा कपूर","पंजीकरण: दस्तावेज़ समीक्षा में"],dl_p:["पूछताछ: नोएडा में नया ग्राहक","3 लंबित पूछताछ का उत्तर दें","सत्यापन: लाइसेंस समीक्षा में"],
dpay_c:a=>"एस्क्रो: "+inr(a)+" आपके माइलस्टोन स्वीकार करने तक सुरक्षित",dpay_p:(a,f)=>"भुगतान मिला "+inr(a)+": ArchiVerse शुल्क "+inr(f)+", आपको "+inr(a-f),swl:"English"}};
const DATA=[
{n:"Ar. Meera Kapoor",t:"architect",c:"Noida",i:"villa",p:150000,r:4.9,d:{en:"Residential and villa design, 12 years",hi:"आवासीय व विला डिज़ाइन, 12 वर्ष"}},
{n:"Studio Vastu Lines",t:"architect",c:"Delhi",i:"interior",p:90000,r:4.7,d:{en:"Vastu-aligned homes and interiors",hi:"वास्तु-अनुरूप घर और इंटीरियर"}},
{n:"Rathore Builders",t:"builder",c:"Ghaziabad",i:"model",p:2500000,r:4.6,d:{en:"Turnkey construction, RCC specialists",hi:"टर्नकी निर्माण, आरसीसी विशेषज्ञ"}},
{n:"Sharma Constructions",t:"builder",c:"Greater Noida",i:"night",p:3200000,r:4.8,d:{en:"Independent floors and duplexes",hi:"इंडिपेंडेंट फ्लोर और डुप्लेक्स"}},
{n:"Yamuna Plots (Verified)",t:"land",c:"Greater Noida",i:"estate",p:4500000,r:4.5,d:{en:"200 sq yd plots, clear title",hi:"200 वर्ग गज प्लॉट, साफ़ टाइटल"}},
{n:"Green Acre Lands",t:"land",c:"Noida",i:"villa",p:6200000,r:4.4,d:{en:"Authority-approved residential plots",hi:"प्राधिकरण-स्वीकृत आवासीय प्लॉट"}},
{n:"Registration Desk",t:"registration",c:"Ghaziabad",i:"interior",p:5000,r:4.9,d:{en:"Document check and appointment support",hi:"दस्तावेज़ जाँच और अपॉइंटमेंट सहायता"}}];
const TK={architect:"o_arch",builder:"o_build",land:"o_land",registration:"o_reg"},TI={architect:"villa",builder:"model",land:"estate",registration:"interior"};
const NUM={customer:[3,5,1],architect:[9,14,294000],builder:[6,5,1960000],land:[11,8,882000]},PAYS={customer:250000,architect:300000,builder:2000000,land:900000};
let lang="en",mode="login",role="customer",user=null,filt={svc:"all",city:"all"},cur=null;
const $=id=>document.getElementById(id),t=k=>T[lang][k],inr=n=>"₹"+Math.round(n).toLocaleString("en-IN");
const bg=(k,g)=>`background-image:${g?g+",":""}url(${IMG[k]})`;
const store={g(k){try{return localStorage.getItem(k)}catch(e){return null}},s(k,v){try{localStorage.setItem(k,v)}catch(e){}},d(k){try{localStorage.removeItem(k)}catch(e){}}};
const show=id=>$(id).classList.add("on"),hide=id=>$(id).classList.remove("on");
function split(a,el){a=a||0;const f=a*.02;el.innerHTML=`<div class=row><span>${t("pay")}</span><b>${inr(a)}</b></div><div class=row><span>${t("fee")}</span><b style="color:var(--gold)">${inr(f)}</b></div><div class=row><span>${t("recv")}</span><b>${inr(a-f)}</b></div>`}
function setLang(l){lang=l;store.s("pac-lang",l);document.documentElement.lang=l;
 document.querySelectorAll("[data-i]").forEach(e=>e.textContent=t(e.dataset.i));
 document.querySelectorAll("[data-p]").forEach(e=>e.placeholder=t(e.dataset.p));
 ["en","hi"].forEach(x=>$("lang-"+x).setAttribute("aria-selected",x===l));$("d-lang").textContent=t("swl");
 tiles();grid();authUI();gleft();gsum();regUI();split(+$("calc").value,$("calc-out"));if(cur)dealUI();if(user)dashUI()}
function tiles(){$("tiles").innerHTML=Object.keys(TK).map(k=>`<button class="tile tilt" style="${bg(TI[k],"linear-gradient(180deg,transparent 35%,rgba(5,10,20,.88))")}" onclick="pick('${k}')"><span class="absolute bottom-3 left-3 right-3 display font-bold text-lg">${t(TK[k])}</span></button>`).join("")}
function pick(k){filt.svc=k;$("q-svc").value=k;grid();$("results").scrollIntoView()}
function runSearch(e){e.preventDefault();filt={svc:$("q-svc").value,city:$("q-city").value};grid();$("results").scrollIntoView()}
function grid(){const L=DATA.map((x,i)=>({x,i})).filter(({x})=>(filt.svc==="all"||x.t===filt.svc)&&(filt.city==="all"||x.c===filt.city));
 $("res-count").textContent=t("res_n")(L.length);
 $("grid").innerHTML=L.length?L.map(({x,i})=>`<article class="panel tilt rounded-xl overflow-hidden flex flex-col"><div class="h-44 bg-cover bg-center" style="${bg(x.i)}"></div><div class="p-4 flex flex-col gap-2 flex-1"><h3 class="display text-lg font-bold">${x.n}</h3><p class="text-sm mute">${t(TK[x.t])} · ${x.c} · ★ ${x.r}</p><p class="text-sm">${x.d[lang]}</p><button class="ghost mt-auto text-sm" onclick="openDeal(${i})">${t("view")}</button></div></article>`).join(""):`<p class=mute>${t("none")}</p>`;fx()}
function openDeal(i){cur=DATA[i];$("m-amt").value=cur.p;$("m-ok").textContent="";dealUI();show("deal")}
function dealUI(){$("m-img").style.cssText=bg(cur.i)+";background-size:cover;background-position:center";$("m-name").textContent=cur.n;$("m-meta").textContent=`${t(TK[cur.t])} · ${cur.c} · ★ ${cur.r}`;$("m-desc").textContent=cur.d[lang];$("m-rev").innerHTML=t("revs").map(x=>`<p class="field">${x}</p>`).join("");split(+$("m-amt").value,$("m-out"))}
function pay(){$("m-ok").textContent=t("ok")}
function openAuth(m){mode=m;authUI();show("auth");setTimeout(()=>$("f-email").focus(),50)}
function setRole(r){role=r;authUI()}
function authUI(){const s=mode==="signup";$("a-title").textContent=t(s?"t_signup":"t_login");$("a-submit").textContent=t(s?"b_signup":"b_login");
 $("a-sw-t").textContent=t(s?"sw_s":"sw_l");$("a-sw").textContent=t(s?"b_login":"signup");$("a-desc").textContent=t("d_"+role);
 $("f-name").style.display=s?"block":"none";$("f-lic").style.display=(s&&role!=="customer")?"block":"none";
 ["customer","architect","builder","land"].forEach(r=>$("r-"+r).setAttribute("aria-selected",r===role))}
function submitAuth(e){e.preventDefault();user={name:$("f-name").value.trim()||$("f-email").value.split("@")[0],role};store.s("pac-user",JSON.stringify(user));hide("auth");showDash()}
addEventListener("keydown",e=>{if(e.key==="Escape"){hide("auth");hide("deal");hide("add")}});
function showDash(){$("landing").style.display="none";$("dash").classList.remove("hide");dashUI();scrollTo(0,0)}
function logout(){user=null;store.d("pac-user");$("dash").classList.add("hide");$("landing").style.display="block";window.rsz&&rsz()}
function dashUI(){const r=user.role,c=r==="customer",n=NUM[r];$("d-add").style.display=c?"none":"block";
 $("d-role").textContent=t("dash")[r];$("d-hello").textContent=t("hello")(user.name);
 $("d-stats").innerHTML=t("st")[r].map((l,i)=>`<div class="panel rounded-xl p-5"><p class="display text-4xl grad font-bold">${(!c&&i===2)?inr(n[i]):n[i]}</p><p class="text-sm mt-1 mute">${l}</p></div>`).join("");
 const a=PAYS[r],items=c?t("dl_c").concat(t("dpay_c")(a),appt?[t("dappt")(appt)]:[]):t("dl_p").concat(t("dpay_p")(a,a*.02));
 $("d-list").innerHTML=items.map(x=>`<li class=field>${x}</li>`).join("")}

let gu=+store.g("pac-gen-used")||0,pend=null,last=null,ren,scene,cam,grp,raf,auto=true,R=30;
const REF={mod:"night",cls:"model",vil:"estate"};
function gleft(){$("g-left").textContent=t(gu?"g_used":"g_free")}
function gen(e){e.preventDefault();pend={W:+$("g-w").value,D:+$("g-d").value,fl:+$("g-fl").value,bd:+$("g-bd").value,st:$("g-st").value,bal:$("g-bal").checked,gar:$("g-gar").checked};
 if(gu>0){show("gpay");return}run()}
function gpay(){hide("gpay");run()}
function run(){gu++;store.s("pac-gen-used",gu);last=pend;gleft();build(last);gsum()}
function gsum(){if(!last)return;const p=last,rear=p.st==="vil"?5:1.5,bw=Math.max(p.W-3,4),bd=Math.max(p.D-3-rear,4),ba=bw*bd*p.fl,cov=bw*bd/(p.W*p.D)*100,ok=ba>=p.bd*18+25*p.fl;
 $("g-info").classList.remove("hide");$("g-ref").style.cssText=bg(REF[p.st]);
 $("g-sum").innerHTML=`<div class=row><span>${t("g_plot")}</span><b>${p.W}×${p.D} m · ${Math.round(p.W*p.D)} m²</b></div><div class=row><span>${t("g_built")}</span><b>${Math.round(ba)} m² · ${Math.round(ba*10.764)} sq ft</b></div><div class=row><span>${t("g_cov")}</span><b>${Math.round(cov)}%</b></div><p class="text-sm mute mt-2">${t("g_set")} ${rear} m.</p><p class="text-sm mt-2" style="color:${ok?"var(--gold)":"#f0a58f"}">${t(ok?"g_ok":"g_tight")}</p>`}
function build(p){const v=$("g-view");$("g-empty").style.display="none";
 if(!window.THREE){$("g-empty").style.display="flex";$("g-empty").textContent=t("g_err");return}
 cancelAnimationFrame(raf);if(ren){ren.dispose();ren.domElement.remove()}
 const w=v.clientWidth,h=v.clientHeight;
 try{ren=new THREE.WebGLRenderer({antialias:true,alpha:true})}catch(e){$("g-empty").style.display="flex";$("g-empty").textContent=t("g_err");return}
 ren.setSize(w,h);ren.setPixelRatio(Math.min(devicePixelRatio,2));v.appendChild(ren.domElement);
 scene=new THREE.Scene();cam=new THREE.PerspectiveCamera(40,w/h,.1,500);
 scene.add(new THREE.HemisphereLight(0xffffff,0x334455,.95));const Ls=new THREE.DirectionalLight(0xffe6b0,.8);Ls.position.set(30,50,25);scene.add(Ls);
 grp=new THREE.Group();scene.add(grp);
 const M=c=>new THREE.MeshLambertMaterial({color:c}),B=(x,y,z,c,px,py,pz)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(x,y,z),M(c));m.position.set(px,py,pz);grp.add(m);return m};
 const W=p.W,D=p.D,F=p.fl,vil=p.st==="vil",rear=vil?5:1.5,bw=Math.max(W-3,4),bd=Math.max(D-3-rear,4),bz=-D/2+rear+bd/2,fz=bz+bd/2,rz=bz-bd/2,top=3*F;
 B(W*2,.1,D*2,0x1d2a3a,0,-.1,0);B(W,.1,D,0x5d7d4f,0,0,0);
 for(let i=0;i<F;i++){B(bw,3,bd,0xefe8d9,0,1.5+3*i,bz);B(bw+.3,.25,bd+.3,0x2b3445,0,3*(i+1),bz)}
 const cols=Math.max(2,Math.round(bw/3.2)),gl=vil?0x7fb4d8:0x24476b;
 for(let i=0;i<F;i++)for(let k=0;k<cols;k++){if(i===0&&((p.gar&&k===0)||k===cols-1))continue;const x=-bw/2+(k+.5)*bw/cols,y=1.8+3*i;B(1.4,1.3,.1,gl,x,y,fz+.03);B(1.4,1.3,.1,gl,x,y,rz-.03)}
 B(1.1,2.2,.12,0x7a4a24,bw/2-bw/cols/2,1.1,fz+.04);
 if(p.gar){B(3,2.4,.12,0x3a4658,-bw/2+1.8,1.2,fz+.05);B(3.2,.05,3.2,0x555d68,-bw/2+1.8,.08,fz+1.6)}
 if(p.bal&&F>=2){B(bw*.55,.2,1.6,0x2b3445,-bw*.12,3.1,fz+.8);B(bw*.55,.9,.06,0x111a28,-bw*.12,3.6,fz+1.58)}
 if(p.st==="cls"){const g=new THREE.ConeGeometry(1,2.6,4);g.rotateY(Math.PI/4);const r=new THREE.Mesh(g,M(0x7a2f22));r.scale.set(bw/2*1.1/.7071,1,bd/2*1.1/.7071);r.position.set(0,top+1.3,bz);grp.add(r)}
 else B(bw+1,.35,bd+1,0x2b3445,0,top+.17,bz);
 if(vil)B(Math.min(bw*.6,8),.1,Math.min(rear-1,3.4),0x2e8bc0,0,.1,-D/2+rear/2);
 B(W,1.2,.2,0xdcd3c1,0,.6,D/2);B(W,1.2,.2,0xdcd3c1,0,.6,-D/2);B(.2,1.2,D,0xdcd3c1,W/2,.6,0);B(.2,1.2,D,0xdcd3c1,-W/2,.6,0);
 [[-W/2+1,-D/2+1],[W/2-1,-D/2+1],[W/2-1.2,D/2-1.5]].forEach(([x,z])=>{B(.3,1.6,.3,0x6b4a2b,x,.8,z);const s=new THREE.Mesh(new THREE.SphereGeometry(1.1,12,10),M(0x2f6b3a));s.position.set(x,2.4,z);grp.add(s)});
 R=Math.max(W,D,top*2)*1.35;grp.position.y=-top/3;auto=true;let a=.6;
 const cp=()=>{cam.position.set(0,R*.55,R);cam.lookAt(0,0,0)};cp();
 let dn=false,lx=0;const el=ren.domElement;
 el.onpointerdown=e=>{dn=true;auto=false;lx=e.clientX};addEventListener("pointerup",()=>dn=false);
 el.onpointermove=e=>{if(dn){grp.rotation.y+=(e.clientX-lx)*.01;lx=e.clientX}};
 el.onwheel=e=>{e.preventDefault();R=Math.min(Math.max(R*(e.deltaY>0?1.08:.92),10),200);cp()};
 grp.rotation.y=a;(function loop(){if(auto)grp.rotation.y+=.004;ren.render(scene,cam);raf=requestAnimationFrame(loop)})()}
const RATES={UP:[7,7,1],DL:[6,4,1],HR:[7,5,.1]};let dd=new Set(),appt=null;try{appt=JSON.parse(store.g("pac-appt")||"null")}catch(e){}
function regTab(i){[0,1,2].forEach(k=>{$("rp"+k).classList.toggle("hide",k!==i);$("rt"+k).setAttribute("aria-selected",k===i)})}
function regUI(){$("docs").innerHTML=t("docs").map((x,i)=>`<label class="field flex gap-2 items-center cursor-pointer"><input type=checkbox ${dd.has(i)?"checked":""} onchange="tick(${i})"><span>${x}</span></label>`).join("");prog();calc()}
function tick(i){dd.has(i)?dd.delete(i):dd.add(i);prog()}
function prog(){const n=t("docs").length;$("dbar").style.width=dd.size/n*100+"%";$("dtxt").textContent=t("d_prog")(dd.size,n)}
function calc(){const v=+$("c-val").value||0,r=RATES[$("c-st").value],f=$("c-by").value==="f"?r[1]:r[0],s=v*f/100,g=v*r[2]/100;$("c-out").innerHTML=`<div class=row><span>${t("c_stamp")} (${f}%)</span><b>${inr(s)}</b></div><div class=row><span>${t("c_reg")} (${r[2]}%)</span><b>${inr(g)}</b></div><div class=row><span>${t("c_tot")}</span><b style="color:var(--gold)">${inr(s+g)}</b></div><p class="text-xs mute mt-3">${t("c_note")}</p>`}
function book(e){e.preventDefault();appt={id:"AV-"+Math.floor(1e5+Math.random()*9e5),d:$("a-date").value,s:$("a-slot").value,o:$("a-off").value};store.s("pac-appt",JSON.stringify(appt));$("a-res").textContent=t("a_ok")(appt);if(user)dashUI()}
function addListing(e){e.preventDefault();const r=user.role,d=$("l-d").value;DATA.unshift({n:$("l-t").value,t:r,c:$("l-c").value,i:TI[r],p:+$("l-p").value,r:5,d:{en:d,hi:d}});filt={svc:"all",city:"all"};$("q-svc").value="all";$("q-city").value="all";hide("add");e.target.reset();grid();$("d-flash").textContent=t("flash")}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);if(e.target.dataset.n)count(e.target)}}),{threshold:.12});
function count(el){const n=+el.dataset.n,s=el.dataset.s||"";let k=0;(function f(){k+=n/55;const done=k>=n;el.textContent=(done?n:Math.floor(k)).toLocaleString("en-IN")+(done?s:"");if(!done)requestAnimationFrame(f)})()}
function fx(){document.querySelectorAll("#landing section>*:not(.absolute):not(canvas),#grid>*,#tiles>*").forEach(e=>{if(!e.o){e.o=1;e.classList.add("rv");io.observe(e)}});
 document.querySelectorAll("[data-n]").forEach(e=>{if(!e.o){e.o=1;io.observe(e)}});
 document.querySelectorAll(".tilt").forEach(e=>{if(e.tt)return;e.tt=1;e.onmousemove=ev=>{const b=e.getBoundingClientRect(),x=(ev.clientX-b.left)/b.width-.5,y=(ev.clientY-b.top)/b.height-.5;e.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`};e.onmouseleave=()=>e.style.transform=""})}
if(matchMedia("(pointer:fine)").matches)addEventListener("pointermove",e=>{$("glow").style.left=e.clientX+"px";$("glow").style.top=e.clientY+"px"});
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)(function(){const c=$("pts"),x=c.getContext("2d");let P=[];function rs(){c.width=c.offsetWidth;c.height=c.offsetHeight;P=Array.from({length:Math.min(55,c.width/22)},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.8+.4,v:Math.random()*.4+.1}))}window.rsz=rs;rs();addEventListener("resize",rs);
 (function f(){x.clearRect(0,0,c.width,c.height);x.fillStyle="rgba(224,181,101,.55)";P.forEach(p=>{p.y-=p.v;if(p.y<0)p.y=c.height;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill()});requestAnimationFrame(f)})()})();
(function(){$("logo-em").src=IMG.emblem;$("logo-hero").src=IMG.logo;$("a-date").min=new Date().toISOString().slice(0,10);regTab(0);$("hero-img").style.cssText+=bg("night");setLang(store.g("pac-lang")==="hi"?"hi":"en");
 try{const u=JSON.parse(store.g("pac-user")||"null");if(u){user=u;showDash()}}catch(e){}})();
