let SEED = "666";
Nof1.SET_SEED(SEED);
// let graphs = Nof1.create_catalan_graphs(10);
// for(let g of graphs) {
//     console.log(g.source_string());
// }

	function random_word(already_picked) {
		words = ["account","achiever","acoustics","act","action","activity","actor","addition","adjustment","advertisement","advice","aftermath","afternoon","afterthought","agreement","air","airplane","airport","alarm","amount","amusement","anger","angle","animal","ants","apparatus","apparel","appliance","approval","arch","argument","arithmetic","arm","army","art","attack","attraction","aunt","authority","back","badge","bag","bait","balance","ball","base","baseball","basin","basket","basketball","bat","bath","battle","bead","bear","bed","bedroom","beds","bee","beef","beginner","behavior","belief","believe","bell","bells","berry","bike","bikes","bird","birds","birth","birthday","bit","bite","blade","blood","blow","board","boat","bomb","bone","book","books","boot","border","bottle","boundary","box","brake","branch","brass","breath","brick","bridge","brother","bubble","bucket","building","bulb","burst","bushes","business","butter","button","branch","brass","breath","brick","bridge","brother","bubble","bucket","building","bulb","burst","bushes","business","butter","button","cabbage","cable","cactus","cake","cakes","calculator","calendar","camera","camp","can","cannon","canvas","cap","caption","car","card","care","carpenter","carriage","cars","cart","cast","cat","cats","cattle","cause","cave","celery","cellar","cemetery","cent","chalk","chance","change","channel","cheese","cherries","cherry","chess","chicken","chickens","chin","church","circle","clam","cloth","clover","club","coach","coal","coast","coat","cobweb","coil","collar","color","committee","company","comparison","competition","condition","connection","control","cook","copper","corn","cough","country","cover","cow","cows","crack","cracker","crate","crayon","cream","creator","creature","credit","crib","crime","crook","crow","crowd","crown","cub","cup","current","curtain","curve","cushion","dad","daughter","day","death","debt","decision","deer","degree","design","desire","desk","destruction","detail","development","digestion","dime","dinner","dinosaurs","direction","dirt","discovery","discussion","distance","distribution","division","dock","doctor","dog","dogs","doll","dolls","donkey","door","downtown","drain","drawer","dress","drink","driving","drop","duck","ducks","dust","ear","earth","earthquake","edge","education","effect","egg","eggnog","eggs","elbow","end","engine","error","event","example","exchange","existence","expansion","experience","expert","eye","eyes","face","fact","fairies","fall","fang","farm","fear","feeling","field","finger","fire","fireman","fish","flag","flame","flavor","flesh","flight","flock","floor","flower","flowers","fly","fog","fold","food","foot","force","fork","form","fowl","frame","friction","friend","friends","frog","frogs","front","fruit","fuel","furniture","gate","geese","ghost","giants","giraffe","glass","glove","gold","government","governor","grade","grain","grandfather","grandmother","grape","grass","grip","ground","group","growth","guide","guitar","gun","hair","haircut","hall","hammer","hand","hands","harbor","harmony","hat","head","health","heat","hill","history","hobbies","hole","holiday","home","honey","hook","hope","horn","horse","horses","hose","hospital","hot","hour","house","houses","humor","hydrant","ice","icicle","idea","impulse","income","increase","industry","ink","insect","instrument","insurance","interest","invention","iron","island","jail","jam","jar","jeans","jelly","jellyfish","jewel","join","judge","juice","jump","kettle","key","kick","kiss","kittens","kitty","knee","knife","knot","knowledge","laborer","lace","ladybug","lake","lamp","land","language","laugh","leather","leg","legs","letter","letters","lettuce","level","library","limit","line","linen","lip","liquid","loaf","lock","locket","look","loss","love","low","lumber","lunch","lunchroom","machine","magic","maid","mailbox","man","marble","mark","market","mask","mass","match","meal","measure","meat","meeting","memory","men","metal","mice","middle","milk","mind","mine","minister","mint","minute","mist","mitten","mom","money","month","moon","morning","mother","motion","mountain","mouth","move","muscle","name","nation","neck","need","needle","nerve","nest","night","noise","north","nose","note","notebook","number","nut","oatmeal","observation","ocean","offer","office","oil","orange","oranges","order","oven","page","pail","pan","pancake","paper","parcel","part","partner","party","passenger","payment","peace","pear","pen","pencil","person","pest","pet","pets","pickle","picture","pie","pies","pig","pigs","pin","pipe","pizzas","place","plane","planes","plant","plantation","plants","plastic","plate","play","playground","pleasure","plot","plough","pocket","point","poison","pollution","popcorn","porter","position","pot","potato","powder","power","price","produce","profit","property","prose","protest","pull","pump","punishment","purpose","push","quarter","quartz","queen","question","quicksand","quiet","quill","quilt","quince","quiver","rabbit","rabbits","rail","railway","rain","rainstorm","rake","range","rat","rate","ray","reaction","reading","reason","receipt","recess","record","regret","relation","religion","representative","request","respect","rest","reward","rhythm","rice","riddle","rifle","ring","rings","river","road","robin","rock","rod","roll","roof","room","root","rose","route","rub","rule","run","sack","sail","salt","sand","scale","scarecrow","scarf","scene","scent","school","science","scissors","screw","sea","seashore","seat","secretary","seed","selection","self","sense","servant","shade","shake","shame","shape","sheep","sheet","shelf","ship","shirt","shock","shoe","shoes","shop","show","side","sidewalk","sign","silk","silver","sink","sister","sisters","size","skate","skin","skirt","sky","slave","sleep","sleet","slip","slope","smash","smell","smile","smoke","snail","snails","snake","snakes","sneeze","snow","soap","society","sock","soda","sofa","son","song","songs","sort","sound","soup","space","spade","spark","spiders","sponge","spoon","spot","spring","spy","square","squirrel","stage","stamp","star","start","statement","station","steam","steel","stem","step","stew","stick","sticks","stitch","stocking","stomach","stone","stop","store","story","stove","stranger","straw","stream","street","stretch","string","structure","substance","sugar","suggestion","suit","summer","sun","support","surprise","sweater","swim","swing","system","table","tail","talk","tank","taste","tax","teaching","team","teeth","temper","tendency","tent","territory","test","texture","theory","thing","things","thought","thread","thrill","throat","throne","thumb","thunder","ticket","tiger","time","tin","title","toad","toe","toes","tomatoes","tongue","tooth","toothbrush","toothpaste","top","touch","town","toy","toys","trade","trail","train","trains","tramp","transport","tray","treatment","tree","trees","trick","trip","trouble","trousers","truck","trucks","tub","turkey","turn","twig","twist","umbrella","uncle","underwear","unit","use","vacation","value","van","vase","vegetable","veil","vein","verse","vessel","vest","view","visitor","voice","volcano","volleyball","voyage","walk","wall","war","wash","waste","watch","water","wave","waves","wax","way","wealth","weather","week","weight","wheel","whip","whistle","wilderness","wind","window","wine","wing","winter","wire","wish","wood","wool","word","work","worm","wound","wren","wrench","wrist","writer","writing","yak","yam","yard","yarn","year","yoke","zebra","zephyr","zinc","zipper","zoo"];
		output = words[random_number(words.length)];
		while (output === already_picked) {
			output = words[random_number(words.length)];
		}
		
		return output;
	}
	
	function random_verb(already_picked) {
		verbs = ["drip","touch","trouble","start","communicate","jog","order","strip","coach","relax","vanish","connect","shock","spray","radiate","spill","hate","rinse","seal","kiss","ask","train","handle","replace","cover","plan","jump","lick","jail","gather","comb","knit","drain","meddle","alert","ask","train","handle","replace","cover","plan","jump","lick","jail","gather","comb","knit","drain","meddle","alert","instruct","arrive","smash","worry","knock","satisfy","fade","time","record","hug","film","sip","request","miss","own","hook","unfasten","pop","drown","gaze","escape","hang","boil","discover","count","work","flower","precede","reproduce","blush","punish","hope","destroy","call","use","surprise","muddle","notice","confess","carry","lie","spell","heap","fasten","fire","flash","carve","accept","like","crush","rock","kill","joke","attempt","protect","concern","suit","appear","agree","sail","shrug","trace","rot","pretend","stir","chop","name","slow","injure","program","man","plant","examine","reply","face","promise","observe","copy","retire","mine","moan","attend","admire","command","learn","answer","prepare","impress","argue","whine","consist","interest","branch","bubble","realise","melt","walk","shop","squeeze","hum","tempt","spoil","remove","race","doubt","step","judge","desert","tap","afford","part","deliver","float","apologise","switch","share","phone","applaud","print","note","wreck","scream","follow","blink","arrange","sign","guarantee","stain","wash","lighten","tame","change","laugh","brake","tick","hammer","mate","mourn","smell","close","invite","rain","warm","occur","puncture","memorise","slap","terrify","check","delight","bolt","cross","settle","spare","type","guard","back","bore","poke","preach","fear","grin","approve","level","wave","pedal","stitch","obey","compare","ski","paint","serve","consider","bare","shelter","risk","bat","rub","double","mix","appreciate","disapprove","exercise","remember","smile","invent","enjoy","clear","cry","dress","flow","skip","empty","decorate","soak","suffer","produce","place","dream","guess","whip","burn","interfere","jam","trick","lock","talk","queue","tickle","complete","stuff","sound","confuse","introduce","amuse","paste","travel","number","water","scrape","correct","borrow","behave","snore","wink","excite","attract","mess up","reflect","camp","mark","tumble","soothe","point","disagree","provide","suspect","license","return","sparkle","buzz","juggle","continue","list","cure","nest","post","try","preserve","offend","challenge","develop","spark","enter","cause","identify","curl","frighten","tremble","peck","describe","squeak","remind","rob","sneeze","turn","listen","frame","rely","last","twist","reduce","tie","grease","welcome","rush","charge","dance","refuse","expect","embarrass","unite","disappear","ban","grate","bomb","pat","bless","hand","reign","strengthen","overflow","balance","announce","squash","pick","regret","unlock","spot","wrap","waste","remain","drop","scrub","flap","dislike","dare","compete","repair","pour","harass","join","multiply","chase","sack","moor","fold","tug","receive","flood","prick","kick","fail","expand","fill","sin","wonder","decay","subtract","fax","signal","shade","curve","greet","clip","irritate","tip","depend","want","beg","file","earn","recognise","supply","dry","exist","collect","add","form","drum","deceive","zoom","march","annoy","murder","watch","heat","fry","dust","bleach","separate","bury","saw","polish","wriggle","stay","wish","brush","trip","weigh","colour","test","blot","open","itch","zip","wobble","paddle","cheer","extend","nod","yell","fix","dam","fetch","transport","visit","found","load","interrupt","long","tour","suppose","stretch","store","raise","pray","pine","divide","happen","punch","bang","stamp","yawn","disarm","question","obtain","haunt","admit","stop","ruin","influence","scold","pass","whisper","groan","succeed","need","mug","analyse","telephone","rescue","wipe","marry","advise","pump","explode","fence","crawl","bow","improve","thank","attack","manage","support","reject","tow","cheat","perform","educate","warn","grab","stroke","drag","move","peel","roll","knot","unpack","nail","possess","trade","pack","fool","kneel","blind","prefer","object","encourage","match","inform","bounce","wander","boast","beam","fit","present","squeal","treat","repeat","launch","fancy","label","explain","increase","land","choke","excuse","wrestle","screw","report","measure","sigh","harm","scratch","cough","imagine","mend","save","scatter","breathe","decide","rule","avoid","calculate","box","peep","detect","contain","grip","release","crack","offer","undress","whirl","permit","live","force","sprout","entertain","pinch","glue","love","hunt","scare","push","coil","untidy","bruise","wait","damage","sniff","trust","belong","crash","attach","pause","heal","battle","pull","plug","end","snow","bake","bump","deserve","intend","prevent","hurry","practise","play","reach","clap","delay","chew","matter","book","complain","milk","care","concentrate","strap","tire","cycle","trot","taste","scribble","hover","look","ignore","suck","hop","trap","shave","glow","owe","guide","press","head","whistle","snatch","rhyme","please","scorch","suspend","wail","smoke","thaw","arrest","stare","slip","clean","claim","suggest","surround","bathe","steer","search","park","inject","employ","shiver","tease","rejoice","allow","include","help"];
		output = verbs[random_number(verbs.length)];
		while (output === already_picked) {
			output = verbs[random_number(verbs.length)];
		}
		
		return output;
	}

	function random_digit() {
		try {
			return document.new_random_integer(8);
		} catch (e) {
			return Math.floor(Math.random() * 8) + 1;
		}
	}

	function random_number(n) {
		try {
			return document.new_random_integer(n);
		} catch (e) {
			return Math.floor(Math.random() * n);
		}
	}

    let experiment_configuration_function = (writer) => { return {

        experiment_name: "TestExperiment",
        seed: SEED,

        introduction_pages: writer.stage_string_pages_commands([
            writer.convert_string_to_html_string(
                "Please conduct this experiment only when you have enough time, are concentrated enough, and motivated enough.\n\nSome tasks might take up significant vertical space. Please open the browser in fullscreen mode (probably by pressing [F11]) to ensure no scrolling will be needed."),
            writer.convert_string_to_html_string(
                "In this experiment, you will be shown a function which is considered to be \"correct\". You can take your time to read this code.\nWhen you hit [Enter], a new code will appear below it. Your job is to scan it whether it now contains a small mistake. Submit 1 if it does contain a mistake, submit 0 if not. (Don't forget to hit [Enter] to submit). This is the part where a timer is running.\nTreat the top code as if it wasn't there anymore (no cross-referencing), I couldn't figure out how to hide it ^^'.")
        ]),

        pre_run_training_instructions: writer.string_page_command(
            writer.convert_string_to_html_string(
                "You entered the training phase.\nPlease run through at least the first 15 questions, to ensure you have seen all possible mistakes at least twice.\n\nIf you want to go to the main experiment, please press [Esc] NOW to ensure you end up on the right seeding."
            )),

        pre_run_experiment_instructions: writer.string_page_command(
            writer.convert_string_to_html_string(
				"You entered the experiment phase.\n\nYou are on the correct seed if the first function is called \"smash\".\nIf the first function isn't called \"smash\", please press [F5] and re-enter the experiment phase from the \"You entered the training phase\" screen.\nThis is to ensure all participants see the same questions in the same order."
        )),

        finish_pages: [
            writer.string_page_command(
                writer.convert_string_to_html_string(
                "Almost done. Next, the experiment data will be downloaded. Please, send the " +
                "downloaded file to the experimenter.\n\nAfter sending your email, you can close this window.\n\nMany thanks for participating in the experiment."
                )
            )
        ],

        layout: [
            { variable: "iterationType;structureType;questionType",  treatments: ["recursive;Array;recursiveArray", "linear;Array;linearArray", "recursive;Sum;recursiveSum", "linear;Sum;linearSum", "recursive;Fibonacci;recursiveFibonacci", "linear;Fibonacci;linearFibonacci", "recursive;Tree;recursiveTree", "linear;Tree;linearTree", "recursive;List;recursiveList", "linear;List;linearList"]},
			{ variable: "errorType",  treatments: ["noError", "singleEquals", "wrongCompare", "wrongIteration", "wrongLengthSizeBrackets"]}, 
        ],

        repetitions: 2, //CATALAN_GRAPHS.length,

        measurement: Nof1.Time_to_finish(Nof1.text_input_experiment),

        task_configuration:    (t) => {

			taskString = "";
			showing = false;
			
            t.do_print_task = () => {
                writer.clear_stage();
				taskString = "";
				bufferString = "";
				showing = false;
				
				objectName = random_word("");
				targetName = random_word(objectName);
				functionName = random_verb("");
				
				if (t.treatment_combination[0].value === "recursive;Array;recursiveArray") {
					taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
					taskString += bufferString + "    if (" + objectName + ".length == 0) {\n";
					taskString += bufferString + "        return 0;\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    if (" + objectName + "[0] == " + targetName + ") {\n";
					taskString += bufferString + "        return 1;\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    return " + functionName + "(" + objectName + ".removeFirst(), " + targetName + ");\n";
					taskString += bufferString + "}\n";
				} else if (t.treatment_combination[0].value === "linear;Array;linearArray") {
					taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
					taskString += bufferString + "    for (int i = 0; i < " + objectName + ".length; i++) {\n";
					taskString += bufferString + "        if (" + objectName + "[i] == " + targetName + ") {\n";
					taskString += bufferString + "            return 1;\n";
					taskString += bufferString + "        }\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    return 0;\n";
					taskString += bufferString + "}\n";
				} else if (t.treatment_combination[0].value === "recursive;Sum;recursiveSum") {
					taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
					taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
					taskString += bufferString + "        return " + objectName + ";\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    return " + objectName + " + " + functionName + "(" + objectName + " - 1);\n";
					taskString += bufferString + "}\n";
				} else if (t.treatment_combination[0].value === "linear;Sum;linearSum") {
					taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
					taskString += bufferString + "    int sum = 0;\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    for (int i = 0; i <= " + objectName + "; i++}\n";
					taskString += bufferString + "        sum += i;\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    return " + objectName + ";\n";
					taskString += bufferString + "}\n";
				} else if (t.treatment_combination[0].value === "recursive;Fibonacci;recursiveFibonacci") {
					taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
					taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
					taskString += bufferString + "        return " + objectName + ";\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    return " + functionName + "(" + objectName + " - 1) + " + functionName + "(" + objectName + " - 2);\n";
					taskString += bufferString + "}\n";
				} else if (t.treatment_combination[0].value === "linear;Fibonacci;linearFibonacci") {
					taskString += bufferString + "int " + functionName + "(int " + objectName + ", int " + targetName + ") {\n";
					taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
					taskString += bufferString + "        return " + objectName + ";\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    int a = 0;\n";
					taskString += bufferString + "    int b = 1;\n";
					taskString += bufferString + "    int c = 0;\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    for (int i = 2; i <= " + objectName + "; i++) {\n";
					taskString += bufferString + "        c = a + b;\n";
					taskString += bufferString + "        a = b;\n";
					taskString += bufferString + "        b = c;\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    return b;\n";
					taskString += bufferString + "}\n";
				} else if (t.treatment_combination[0].value === "recursive;Tree;recursiveTree") {
					taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
					taskString += bufferString + "    if (" + objectName + ".root() == NULL) {\n";
					taskString += bufferString + "        return 0;\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    if (" + objectName + ".content() == " + targetName + ") {\n";
					taskString += bufferString + "        return 1;\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    return " + functionName + "(" + objectName + ".left(), " + targetName + ") || " + functionName + "(" + objectName + ".right(), " + targetName + ");\n";
					taskString += bufferString + "}\n";
				} else if (t.treatment_combination[0].value === "linear;Tree;linearTree") {
					taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
					taskString += bufferString + "    if (" + objectName + ".root() == NULL) {\n";
					taskString += bufferString + "        return 0;\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					/*taskString += bufferString + "    Stack<Node> stack = new Stack<>();\n";
					taskString += bufferString + "    stack.push(" + objectName + ".root()\n";
					taskString += bufferString + "    \n";*/
					taskString += bufferString + "    while (!stack.isEmpty()){\n";
					taskString += bufferString + "        Node current = stack.pop();\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "        if (current.content() == " + targetName + ") {\n";
					taskString += bufferString + "            return 1;\n";
					taskString += bufferString + "        }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "        if (current.right() != NULL) {\n";
					taskString += bufferString + "           stack.push(current.right());\n";
					taskString += bufferString + "        }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "        if (current.left() != NULL) {\n";
					taskString += bufferString + "           stack.push(current.left());\n";
					taskString += bufferString + "        }\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    return 0;\n";
					taskString += bufferString + "}\n";
				} else if (t.treatment_combination[0].value === "recursive;List;recursiveList") {
					taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
					taskString += bufferString + "    if (" + objectName + ".count() == 0) {\n";
					taskString += bufferString + "        return 0;\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    if (" + objectName + ".first() == " + targetName + ") {\n";
					taskString += bufferString + "        return 1;\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    return " + functionName + "(" + objectName + ".next(), " + targetName + ");\n";
					taskString += bufferString + "}\n";
				} else if (t.treatment_combination[0].value === "linear;List;linearList") {
					taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
					taskString += bufferString + "    for (int i = " + objectName + ".first(); i != NULL; i = i.next()) {\n";
					taskString += bufferString + "        if (i == " + targetName + ") {\n";
					taskString += bufferString + "            return 1;\n"
					taskString += bufferString + "        }\n";
					taskString += bufferString + "    }\n";
					taskString += bufferString + "    \n";
					taskString += bufferString + "    return 0;\n";
					taskString += bufferString + "}\n";
				}
				writer.print_string_on_stage(writer.convert_string_to_html_string(taskString));
				
				
				
				taskString = "";
				bufferString = "                                                               ";
				for (let i = 0; i < random_number(20); i++) {
					//taskString += "\n";;
				}
				
				for (let i = 0; i < random_number(180); i++) {
					bufferString += " ";;
				}
				
				if (t.treatment_combination[1].value === "noError") {
					if (t.treatment_combination[0].value === "recursive;Array;recursiveArray") {
						taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".length == 0) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + "[0] == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".removeFirst(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Array;linearArray") {
						taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    for (int i = 0; i < " + objectName + ".length; i++) {\n";
						taskString += bufferString + "        if (" + objectName + "[i] == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Sum;recursiveSum") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + objectName + " + " + functionName + "(" + objectName + " - 1);\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Sum;linearSum") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    int sum = 0;\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    for (int i = 0; i <= " + objectName + "; i++}\n";
						taskString += bufferString + "        sum += i;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + objectName + ";\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Fibonacci;recursiveFibonacci") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + " - 1) + " + functionName + "(" + objectName + " - 2);\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Fibonacci;linearFibonacci") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ", int " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    int a = 0;\n";
						taskString += bufferString + "    int b = 1;\n";
						taskString += bufferString + "    int c = 0;\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    for (int i = 2; i <= " + objectName + "; i++) {\n";
						taskString += bufferString + "        c = a + b;\n";
						taskString += bufferString + "        a = b;\n";
						taskString += bufferString + "        b = c;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return b;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Tree;recursiveTree") {
						taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".root() == NULL) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + ".content() == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".left(), " + targetName + ") || " + functionName + "(" + objectName + ".right(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Tree;linearTree") {
						taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".root() == NULL) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						/*taskString += bufferString + "    Stack<Node> stack = new Stack<>();\n";
						taskString += bufferString + "    stack.push(" + objectName + ".root()\n";
						taskString += bufferString + "    \n";*/
						taskString += bufferString + "    while (!stack.isEmpty()){\n";
						taskString += bufferString + "        Node current = stack.pop();\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.content() == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.right() != NULL) {\n";
						taskString += bufferString + "           stack.push(current.right());\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.left() != NULL) {\n";
						taskString += bufferString + "           stack.push(current.left());\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;List;recursiveList") {
						taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".count() == 0) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + ".first() == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n"
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".next(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;List;linearList") {
						taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    for (int i = " + objectName + ".first(); i != NULL; i = i.next()) {\n";
						taskString += bufferString + "        if (i == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n"
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					}
				}
				firstEqualsString = "=";
				secondEqualsString = "=";
				if (random_digit % 2 === 0) {
					firstEqualsString += "=";
				} else {
					secondEqualsString += "=";
				}
				if (t.treatment_combination[1].value === "singleEquals") {
					if (t.treatment_combination[0].value === "recursive;Array;recursiveArray") {
						taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".length " + firstEqualsString + " 0) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + "[0] " + secondEqualsString + " " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".removeFirst(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Array;linearArray") {
						taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    for (int i = 0; i < " + objectName + ".length; i++) {\n";
						taskString += bufferString + "        if (" + objectName + "[i] = " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Sum;recursiveSum") { //duplicate wrongCompare
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " < 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + objectName + " + " + functionName + "(" + objectName + " - 1);\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Sum;linearSum") { //duplicate wrongCompare
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    int sum = 0;\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    for (int i = 0; i < " + objectName + "; i++}\n";
						taskString += bufferString + "        sum += i;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + objectName + ";\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Fibonacci;recursiveFibonacci") { //duplicate wrongCompare
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " < 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + " - 1) + " + functionName + "(" + objectName + " - 2);\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Fibonacci;linearFibonacci") { //duplicate wrongCompare
						taskString += bufferString + "int " + functionName + "(int " + objectName + ", int " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " < 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    int a = 0;\n";
						taskString += bufferString + "    int b = 1;\n";
						taskString += bufferString + "    int c = 0;\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    for (int i = 2; i <= " + objectName + "; i++) {\n";
						taskString += bufferString + "        c = a + b;\n";
						taskString += bufferString + "        a = b;\n";
						taskString += bufferString + "        b = c;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return b;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Tree;recursiveTree") {
						taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".root() == NULL) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + ".content() = " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".left(), " + targetName + ") || " + functionName + "(" + objectName + ".right(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Tree;linearTree") {
						taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".root() == NULL) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						/*taskString += bufferString + "    Stack<Node> stack = new Stack<>();\n";
						taskString += bufferString + "    stack.push(" + objectName + ".root()\n";
						taskString += bufferString + "    \n";*/
						taskString += bufferString + "    while (!stack.isEmpty()){\n";
						taskString += bufferString + "        Node current = stack.pop();\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.content() = " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.right() != NULL) {\n";
						taskString += bufferString + "           stack.push(current.right());\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.left() != NULL) {\n";
						taskString += bufferString + "           stack.push(current.left());\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;List;recursiveList") {
						taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".count() " + firstEqualsString + " 0) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + ".first() " + secondEqualsString + " " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n"
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".next(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;List;linearList") {
						taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    for (int i = " + objectName + ".first(); i != NULL; i = i.next()) {\n";
						taskString += bufferString + "        if (i = " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n"
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					}
				}
				if (t.treatment_combination[1].value === "wrongCompare") {
					if (t.treatment_combination[0].value === "recursive;Array;recursiveArray") {
						taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".length == 0) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + "[1] == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".removeFirst(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Array;linearArray") {
						taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    for (int i = 0; i <= " + objectName + ".length; i++) {\n";
						taskString += bufferString + "        if (" + objectName + "[i] == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Sum;recursiveSum") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " < 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + objectName + " + " + functionName + "(" + objectName + " - 1);\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Sum;linearSum") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    int sum = 0;\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    for (int i = 0; i < " + objectName + "; i++}\n";
						taskString += bufferString + "        sum += i;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + objectName + ";\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Fibonacci;recursiveFibonacci") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " < 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + " - 1) + " + functionName + "(" + objectName + " - 2);\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Fibonacci;linearFibonacci") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ", int " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " < 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    int a = 0;\n";
						taskString += bufferString + "    int b = 1;\n";
						taskString += bufferString + "    int c = 0;\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    for (int i = 2; i <= " + objectName + "; i++) {\n";
						taskString += bufferString + "        c = a + b;\n";
						taskString += bufferString + "        a = b;\n";
						taskString += bufferString + "        b = c;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return b;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Tree;recursiveTree") {
						taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".root() != NULL) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + ".content() == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".left(), " + targetName + ") || " + functionName + "(" + objectName + ".right(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Tree;linearTree") {
						taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".root() != NULL) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						/*taskString += bufferString + "    Stack<Node> stack = new Stack<>();\n";
						taskString += bufferString + "    stack.push(" + objectName + ".root()\n";
						taskString += bufferString + "    \n";*/
						taskString += bufferString + "    while (!stack.isEmpty()){\n";
						taskString += bufferString + "        Node current = stack.pop();\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.content() == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.right() != NULL) {\n";
						taskString += bufferString + "           stack.push(current.right());\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.left() != NULL) {\n";
						taskString += bufferString + "           stack.push(current.left());\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;List;recursiveList") {
						taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".count() != 0) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + ".first() == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n"
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".next(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;List;linearList") {
						taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    for (int i = " + objectName + ".first(); i == NULL; i = i.next()) {\n";
						taskString += bufferString + "        if (i == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n"
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					}
				}
				if (t.treatment_combination[1].value === "wrongIteration") {
					if (t.treatment_combination[0].value === "recursive;Array;recursiveArray") {
						taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".length == 0) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + "[0] == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + "[1], " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Array;linearArray") {
						taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    for (int i = 0; i < " + objectName + ".length; i+) {\n";
						taskString += bufferString + "        if (" + objectName + "[i] == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Sum;recursiveSum") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + objectName + " + " + functionName + "(" + objectName + " + 1);\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Sum;linearSum") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    int sum = 0;\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    for (int i = 0; i <= " + objectName + "; i++}\n";
						taskString += bufferString + "        sum -= i;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + objectName + ";\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Fibonacci;recursiveFibonacci") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + " - 1) - " + functionName + "(" + objectName + " - 2);\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Fibonacci;linearFibonacci") {
						taskString += bufferString + "int " + functionName + "(int " + objectName + ", int " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    int a = 0;\n";
						taskString += bufferString + "    int b = 1;\n";
						taskString += bufferString + "    int c = 0;\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    for (int i = 2; i <= " + objectName + "; i++) {\n";
						taskString += bufferString + "        c = a - b;\n";
						taskString += bufferString + "        a = b;\n";
						taskString += bufferString + "        b = c;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return b;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Tree;recursiveTree") {
						taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".root() == NULL) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + ".content() == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".left(), " + targetName + ") && " + functionName + "(" + objectName + ".right(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Tree;linearTree") {
						taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".root() == NULL) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						/*taskString += bufferString + "    Stack<Node> stack = new Stack<>();\n";
						taskString += bufferString + "    stack.push(" + objectName + ".root()\n";
						taskString += bufferString + "    \n";*/
						taskString += bufferString + "    while (!stack.isEmpty()){\n";
						taskString += bufferString + "        Node current = stack.pop();\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.content() == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.right() != NULL) {\n";
						taskString += bufferString + "           stack.push(current.left());\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.left() != NULL) {\n";
						taskString += bufferString + "           stack.push(current.right());\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;List;recursiveList") {
						taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".count() == 0) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + ".first() == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n"
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".next, " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;List;linearList") {
						taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    for (int i = " + objectName + ".first(); i != NULL; i = i.next) {\n";
						taskString += bufferString + "        if (i == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n"
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					}
				}
				firstBracketString = "";
				secondBracketString = "";
				if (random_digit % 2 === 0) {
					firstBracketString += "()";
				} else {
					secondBracketString += "()";
				}
				if (t.treatment_combination[1].value === "wrongLengthSizeBrackets") {
					if (t.treatment_combination[0].value === "recursive;Array;recursiveArray") {
						taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".length() == 0) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + "[0] == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".removeFirst(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Array;linearArray") {
						taskString += bufferString + "int " + functionName + "(Data[] " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    for (int i = 0; i < " + objectName + ".length(); i++) {\n";
						taskString += bufferString + "        if (" + objectName + "[i] == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Sum;recursiveSum") { //duplicate wrongIteration
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + objectName + " + " + functionName + "(" + objectName + " + 1);\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Sum;linearSum") { //duplicate wrongIteration
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    int sum = 0;\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    for (int i = 0; i <= " + objectName + "; i++}\n";
						taskString += bufferString + "        sum -= i;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + objectName + ";\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Fibonacci;recursiveFibonacci") { //duplicate wrongIteration
						taskString += bufferString + "int " + functionName + "(int " + objectName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + " - 1) - " + functionName + "(" + objectName + " - 2);\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Fibonacci;linearFibonacci") { //duplicate wrongIteration
						taskString += bufferString + "int " + functionName + "(int " + objectName + ", int " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + " <= 1) {\n";
						taskString += bufferString + "        return " + objectName + ";\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    int a = 0;\n";
						taskString += bufferString + "    int b = 1;\n";
						taskString += bufferString + "    int c = 0;\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    for (int i = 2; i <= " + objectName + "; i++) {\n";
						taskString += bufferString + "        c = a - b;\n";
						taskString += bufferString + "        a = b;\n";
						taskString += bufferString + "        b = c;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return b;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;Tree;recursiveTree") {
						taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".root" + firstBracketString + " == NULL) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + ".content() == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".left" + secondBracketString + ", " + targetName + ") || " + functionName + "(" + objectName + ".right" + secondBracketString + ", " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;Tree;linearTree") {
						taskString += bufferString + "int " + functionName + "(Tree " + objectName + ", Node " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".root" + firstBracketString + " == NULL) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						/*taskString += bufferString + "    Stack<Node> stack = new Stack<>();\n";
						taskString += bufferString + "    stack.push(" + objectName + ".root()\n";
						taskString += bufferString + "    \n";*/
						taskString += bufferString + "    while (!stack.isEmpty()){\n";
						taskString += bufferString + "        Node current = stack.pop();\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.content" + firstBracketString + " == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.right" + secondBracketString + " != NULL) {\n";
						taskString += bufferString + "           stack.push(current.right());\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "        if (current.left" + secondBracketString + " != NULL) {\n";
						taskString += bufferString + "           stack.push(current.left());\n";
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "recursive;List;recursiveList") {
						taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    if (" + objectName + ".count " + firstBracketString + " == 0) {\n";
						taskString += bufferString + "        return 0;\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    if (" + objectName + ".first" + secondBracketString + " == " + targetName + ") {\n";
						taskString += bufferString + "        return 1;\n"
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return " + functionName + "(" + objectName + ".next(), " + targetName + ");\n";
						taskString += bufferString + "}\n";
					} else if (t.treatment_combination[0].value === "linear;List;linearList") {
						taskString += bufferString + "int " + functionName + "(List " + objectName + ", Data " + targetName + ") {\n";
						taskString += bufferString + "    for (int i = " + objectName + ".first; i != NULL; i = i.next()) {\n";
						taskString += bufferString + "        if (i == " + targetName + ") {\n";
						taskString += bufferString + "            return 1;\n"
						taskString += bufferString + "        }\n";
						taskString += bufferString + "    }\n";
						taskString += bufferString + "    \n";
						taskString += bufferString + "    return 0;\n";
						taskString += bufferString + "}\n";
					}
				}

				t.expected_answer = "1";
				if (t.treatment_combination[1].value === "noError") {
					t.expected_answer = "0";
				}

				//writer.print_string_on_stage(writer.convert_string_to_html_string(taskString));
				//writer.print_string_on_stage(writer.convert_string_to_html_string("expected " + t.expected_answer + ", type: " + t.treatment_combination[0].value + ", errorType: " + t.treatment_combination[1].value));
			};

            t.accepts_answer_function = (given_answer) => {
				if (showing === false) {
					return false;
				}
				return true;
                //return given_answer===t.expected_answer;
            };

            t.do_print_error_message = (given_answer) => {
                writer.clear_error();
				//writer.clear_stage();
				if (showing === false) {
					writer.print_string_on_stage(writer.convert_string_to_html_string(taskString));
					showing = true;
				}
            };

            t.do_print_after_task_information = () => {
                writer.clear_error();
				if (t.treatment_combination[0].value === "recursive;Array;recursiveArray") {
					if (t.treatment_combination[1].value === "noError") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 0 - There was no Error.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "singleEquals") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - There was a single = instead of a double ==.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongCompare") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The second if had [1] instead of [0].\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongIteration") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The recursive call does not call .removeFirst().\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongLengthSizeBrackets") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The array.length had extra brackets ().\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
				}
				if (t.treatment_combination[0].value === "linear;Array;linearArray") {
					if (t.treatment_combination[1].value === "noError") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 0 - There was no Error.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "singleEquals") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - There was a single = instead of a double ==.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongCompare") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The for loop compared <= instead of <.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongIteration") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The for loop has i+ instead of i++.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongLengthSizeBrackets") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The array.length had extra brackets ().\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
				}
				if (t.treatment_combination[0].value === "recursive;Sum;recursiveSum") {
					if (t.treatment_combination[1].value === "noError") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 0 - There was no Error.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "singleEquals") {
						writer.print_string_on_stage(writer.convert_string_to_html_string( //duplicate wrongCompare
						"Correct Answer: 1 - The if compared < 1 instead of <= 1.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongCompare") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The if compared < 1 instead of <= 1.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongIteration") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The function gets called with value+1 instead of -1, causing an endless loop.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongLengthSizeBrackets") { //duplicate wrongIteration
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The function gets called with value+1 instead of -1, causing an endless loop.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
				}
				if (t.treatment_combination[0].value === "linear;Sum;linearSum") {
					if (t.treatment_combination[1].value === "noError") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 0 - There was no Error.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "singleEquals") {
						writer.print_string_on_stage(writer.convert_string_to_html_string( //duplicate wrongCompare
						"Correct Answer: 1 - The for compared < target instead of <= target.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongCompare") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The for compared < target instead of <= target.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongIteration") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The function subtracts from sum instead of adding to it.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongLengthSizeBrackets") { //duplicate wrongIteration
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The function subtracts from sum instead of adding to it.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
				}
				if (t.treatment_combination[0].value === "recursive;Fibonacci;recursiveFibonacci") {
					if (t.treatment_combination[1].value === "noError") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 0 - There was no Error.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "singleEquals") { //duplicate wrongCompare
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The if compared < 1 instead of <= 1.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongCompare") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The if compared < 1 instead of <= 1.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongIteration") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The function subtracts components instead of adding them.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongLengthSizeBrackets") { //duplicate wrongIteration
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The function subtracts components instead of adding them.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
				}
				if (t.treatment_combination[0].value === "linear;Fibonacci;linearFibonacci") {
					if (t.treatment_combination[1].value === "noError") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 0 - There was no Error.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "singleEquals") { //duplicate wrongCompare
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The if compared < 1 instead of <= 1.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongCompare") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The if compared < 1 instead of <= 1.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongIteration") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The function subtracts components instead of adding them.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongLengthSizeBrackets") { //duplicate wrongIteration
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The function subtracts components instead of adding them.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
				}
				if (t.treatment_combination[0].value === "recursive;Tree;recursiveTree") {
					if (t.treatment_combination[1].value === "noError") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 0 - There was no Error.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "singleEquals") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - There was a single = instead of a double ==.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongCompare") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - This one said != NULL.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongIteration") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The recursive call checks &&.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongLengthSizeBrackets") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The Tree.root has missing brackets ().\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
				}
				if (t.treatment_combination[0].value === "linear;Tree;linearTree") {
					if (t.treatment_combination[1].value === "noError") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 0 - There was no Error.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "singleEquals") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - There was a single = instead of a double ==.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongCompare") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - This one said != NULL.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongIteration") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The bottom left/rights are swapped.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongLengthSizeBrackets") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The Tree.root has missing brackets ().\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
				}
				if (t.treatment_combination[0].value === "recursive;List;recursiveList") {
					if (t.treatment_combination[1].value === "noError") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 0 - There was no Error.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "singleEquals") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - There was a single = instead of a double ==.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongCompare") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The first if tests == NULL instead of != NULL.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongIteration") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The .next is missing its ().\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongLengthSizeBrackets") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The .first or .count is missing its ().\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
				}
				if (t.treatment_combination[0].value === "linear;List;linearList") {
					if (t.treatment_combination[1].value === "noError") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 0 - There was no Error.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "singleEquals") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - There was a single = instead of a double ==.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongCompare") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The for loop tests == NULL instead of != NULL.\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongIteration") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The .next is missing its ().\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
					if (t.treatment_combination[1].value === "wrongLengthSizeBrackets") {
						writer.print_string_on_stage(writer.convert_string_to_html_string(
						"Correct Answer: 1 - The .first is missing its ().\n\n" +
						"In case, you feel not concentrated enough, make a short break.\n\n" +
						"Press [Enter] to go on. "));
					}
				}
            }
        }
    }};

    Nof1.BROWSER_EXPERIMENT(experiment_configuration_function);
