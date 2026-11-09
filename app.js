'use strict';
const script = [
['First Witch','Hecate, what happened? You look mad.','3.5'],
['Hecate','You were making plans with Macbeth and nobody thought to tell me? I am supposed to be in charge of your magic.','3.5'],
['Second Witch','We told him he would be king. That definitely got his attention.','1.3'],
['Hecate','And you think he cares about you? He only listens when he thinks he will get something out of it.','3.5'],
['Third Witch','Being king has not helped him much. He is still scared of Banquo and Fleance. He will not even tell his wife what he is planning.','3.2'],
['First Witch','He sent people to kill them. Banquo is dead, but Fleance got away.','3.3'],
['Second Witch','Then he saw Banquo’s ghost at the banquet. Lady Macbeth had to send everyone home.','3.4'],
['Third Witch','After that, he said he was coming back to us for answers.','3.4'],
['Hecate','Good. Meet me at the pit of Acheron tomorrow morning. He will be there asking about his future.','3.5'],
['First Witch','We will bring the spells and everything else. What are you going to do?','3.5'],
['Hecate','There is a drop hanging from the moon. I will use it to make spirits that fool him.','3.5'],
['Second Witch','So instead of scaring him, we make him think he has nothing to worry about?','3.5'],
['Hecate','Exactly. Let him feel safe enough to stop thinking. “Security / Is mortals’ chiefest enemy.”','3.5'],
['Third Witch','Then he will trust whatever he wants to hear, even when he should know better.','3.5'],
['First Witch','She is leaving with her spirit. Come on, we need to get ready before she comes back.','3.5']
];
const knowledge = [
{keys:['angry','anger','mad','furious','excluded','invite','upset'],text:'Hecate is furious because the sisters dealt with Macbeth without including her, their mistress. She also says Macbeth cares only about his own ends.',ref:'3.5'},
{keys:['plan','manipulate','manipulation','illusion','spirits','trick','deceive','deception','moon','drop','overconfident','security','confidence','safe'],text:'Hecate plans to use a magical drop from the moon to create deceptive spirits. Their illusions will make Macbeth dismiss danger and trust his hopes more than wisdom. Her plan is to exploit his false sense of safety; this scene does not show its outcome.',ref:'3.5'},
{keys:['meet','acheron','morning','vessels','charms','prepare','preparing'],text:'Hecate orders the sisters to bring their vessels, spells, and charms to the pit of Acheron in the morning. Macbeth will come there to learn his destiny.',ref:'3.5'},
{keys:['hecate','leader','mistress','boss'],text:'Hecate calls herself the mistress of the witches’ charms. She rebukes the sisters for excluding her, then takes charge of their next meeting and their plan to deceive Macbeth.',ref:'3.5'},
{keys:['fleance','escape','escaped'],text:'The hired murderers kill Banquo, but his son Fleance escapes. Macbeth learns about that escape at the banquet and is troubled because he still sees a threat to his power.',refs:['3.3','3.4']},
{keys:['ghost','banquet','dinner','feast'],text:'At the banquet, Macbeth sees Banquo’s ghost, although the other guests do not. Lady Macbeth tries to explain his behavior as a familiar fit, then sends everyone away when the disturbance continues. Afterward he decides to consult the witches again.',ref:'3.4'},
{keys:['banquo','murderers','assassins'],text:'Macbeth fears Banquo and his descendants. He hires murderers to kill Banquo and Fleance. Banquo dies in the attack, but Fleance gets away. This is Macbeth’s decision; the witches do not order that murder.',refs:['3.1','3.3']},
{keys:['scorpions','anxious','anxiety','paranoia','paranoid','unhappy','fear','afraid','scared'],text:'Even with the crown, Macbeth feels threatened by Banquo and Fleance. He describes his troubled mind to his wife and hints at a terrible deed, while keeping his plan from her. Power has brought him anxiety rather than peace.',ref:'3.2'},
{keys:['lady','wife','marriage'],text:'Lady Macbeth is unhappy despite getting what she wanted. She urges Macbeth to look cheerful for their guests, but he keeps his next violent plan from her. At the banquet she tries to cover for his behavior and finally sends the guests away.',refs:['3.2','3.4']},
{keys:['prophecy','prophecies','predict','predicted','prediction','cawdor','glamis','greetings'],text:'The sisters greet Macbeth as Thane of Glamis, Thane of Cawdor, and a future king. They tell Banquo that he will father kings although he will not be one himself. News that Macbeth has become Thane of Cawdor makes their words seem credible.',ref:'1.3'},
{keys:['duncan','dagger','guards','blood','guilt','guilty'],text:'Macbeth sees an imagined dagger before murdering Duncan. Afterward he is distressed, and Lady Macbeth returns the daggers and smears the guards with blood to frame them. Macbeth later admits killing the guards.',refs:['2.1','2.2','2.3']},
{keys:['ambition','choice','fate','destiny','free','will','control','responsible'],text:'The sisters predict Macbeth’s rise, but they do not command him to kill Duncan. Macbeth recognizes his ambition before choosing the murder. By Act 3 he is arranging further violence to protect his crown. The tension between prediction and personal choice is an interpretation supported by those scenes.',refs:['1.3','1.7','3.1']},
{keys:['macduff','malcolm','england','lennox'],text:'By the end of Act 3, Macduff has gone to England to seek help against Macbeth, where Malcolm is staying. Lennox and a lord discuss Scotland’s suffering under Macbeth. Their discussion shows growing opposition; I will not reveal anything after Act 3.',ref:'3.6'},
{keys:['witch','witches','sisters','fair','foul','weather','thunder'],text:'The three sisters first meet amid thunder and lightning, then encounter Macbeth and Banquo on the heath. Their strange predictions tempt Macbeth to imagine a crown. In Act 3, Scene 5, Hecate takes charge and prepares a scheme of deceptive spirits.',refs:['1.1','1.3','3.5']},
{keys:['return','again','visit','answers'],text:'After the ruined banquet, Macbeth says he will visit the Weird Sisters the next morning and demand more knowledge. In the next scene, Hecate prepares for his arrival. Act 3 describes the planned meeting, without showing it happen.',refs:['3.4','3.5']},
{keys:['hello','hi','hey'],text:'Hey. What do you want to know about Macbeth? We are stopping at the end of Act 3.',ref:'3.5'}
];
const later = /\b(act\s*(?:[45]|iv|v|four|five)|birnam|dunsinane|apparitions|born of (?:a )?woman|sleepwalk\w*|ending|ends|end of (?:the )?play|who kills macbeth|how (?:does|will) macbeth die|macbeth'?s death|lady macbeth'?s death|what happens (?:next|after act 3)|final act)\b/i;
const avatars={'Hecate':['H','hecate'],'First Witch':['1','first'],'Second Witch':['2','second'],'Third Witch':['3','third']};

function answer(question){
 if(later.test(question)) return {text:'That happens after Act 3, so I cannot go into it here. We can talk about what Hecate is planning in Scene 5, though.',refs:[]};
 const words=question.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/);let best=null,score=0;
 for(const item of knowledge){const n=item.keys.reduce((s,k)=>s+(words.includes(k)?1:0),0);if(n>score){score=n;best=item;}}
 return best?{text:best.text,refs:best.refs||[best.ref]}:{text:'I cannot answer that from the replies available here. Try asking about Hecate’s plan, Banquo, the banquet, or the original predictions.',refs:[]};
}
function sceneLink(ref){const a=document.createElement('a');a.className='evidence';const [act,scene]=ref.split('.');a.href=`https://www.folger.edu/explore/shakespeares-works/macbeth/read/${act}/${scene}/`;a.target='_blank';a.rel='noopener';a.textContent=`Act ${act}, Scene ${scene} ↗`;return a;}
function message(who,text,refs,index){const row=document.createElement('div');row.className='message'+(who==='Hecate'?' is-hecate':'');const av=document.createElement('span');av.className='avatar '+avatars[who][1];av.textContent=avatars[who][0];av.setAttribute('aria-hidden','true');const content=document.createElement('div');content.className='message-content';const meta=document.createElement('div');meta.className='meta';const name=document.createElement('span');name.textContent=who;meta.append(name);if(index){const count=document.createElement('span');count.className='message-number';count.textContent=String(index).padStart(2,'0')+' / 15';meta.append(count);}const p=document.createElement('p');p.textContent=text;content.append(meta,p);for(const ref of refs){content.append(sceneLink(ref),document.createTextNode('   '));}row.append(av,content);return row;}
for(const [i,item] of script.entries()) document.querySelector('#script').append(message(item[0],item[1],[item[2]],i+1));
function changeView(view){
 document.querySelector('#script-view').hidden=view!=='script';
 document.querySelector('#ask-view').hidden=view!=='ask';
 document.querySelector('#room-title').textContent=view==='script'?'The group chat':'Ask a witch';
 document.querySelector('#room-subtitle').textContent=view==='script'?'Hecate, First Witch, Second Witch, Third Witch':'Questions about Macbeth · Acts 1–3';
 document.querySelectorAll('.nav').forEach(b=>{b.classList.toggle('active',b.dataset.view===view);b.setAttribute('aria-pressed',String(b.dataset.view===view));});
 if(view==='ask')document.querySelector('#question').focus({preventScroll:true});
}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>changeView(b.dataset.view)));
function ask(q){const question=q.trim();if(!question)return;const box=document.querySelector('#replies');const user=document.createElement('div');user.className='user-message';user.textContent=question;box.append(user);const who=document.querySelector('#witch').value;const result=answer(question);box.append(message(who,result.text,result.refs));document.querySelector('#question').value='';box.lastElementChild.scrollIntoView({block:'nearest',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
document.querySelector('#question-form').addEventListener('submit',e=>{e.preventDefault();ask(document.querySelector('#question').value)});
document.querySelectorAll('[data-question]').forEach(b=>b.addEventListener('click',()=>ask(b.dataset.question)));
document.querySelector('#clear').addEventListener('click',()=>document.querySelector('#replies').replaceChildren());
document.querySelector('#download').addEventListener('click',()=>{const text='THE WITCHES’ GROUP CHAT — MACBETH, ACT 3, SCENE 5\nA modern creative adaptation; references use only Acts 1–3.\n\n'+script.map(([who,text,ref],i)=>`${i+1}. ${who}: ${text} (Act ${ref.split('.')[0]}, Scene ${ref.split('.')[1]})`).join('\n\n')+'\n\nSource: Folger Shakespeare Library, Macbeth. Only the words in quotation marks are a direct quotation. Other messages are imagined dialogue based on the cited scenes.\nhttps://www.folger.edu/explore/shakespeares-works/macbeth/read/3/5/';const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='witches-group-chat.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)});

const notes=document.querySelector('#notes');
const notesToggle=document.querySelector('#notes-toggle');
function closeNotes(){notes.classList.remove('open');notesToggle.setAttribute('aria-expanded','false');}
notesToggle.addEventListener('click',()=>{const open=notes.classList.toggle('open');notesToggle.setAttribute('aria-expanded',String(open));});
document.querySelector('#notes-close').addEventListener('click',()=>{closeNotes();notesToggle.focus();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&notes.classList.contains('open')){closeNotes();notesToggle.focus();}});
document.addEventListener('click',e=>{if(notes.classList.contains('open')&&!notes.contains(e.target)&&!notesToggle.contains(e.target))closeNotes();});
document.querySelector('.brand').addEventListener('click',e=>{e.preventDefault();changeView('script');document.querySelector('#script-scroll').scrollTop=0;});
changeView('script');
