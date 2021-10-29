var player,playerKnifeImg,bgImg,playerImg;
var edges,flag="closed";
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var engine,battery,tools,engineImg,batteryImg,toolImg,gunsImg,workShop,dockInstructionImg;
var score=0,count=0;
var fbwall,toolswall;
var brick1Img,brick2Img,brick3Img;
var brick4Img,brick5Img;
var splashlogo,splashlogoImg,splashstart,splashstartImg;
var gameState="start";
var ship,landing,bg,img;
var floorImg;
var life=0;
var plr="true";
var plbulletgroup;
var en=0,en2=0,fg1=0,fg2=0,fg3=0,fg4=0,bs=0;
var  ins1,ins2,ins3,ins1img,ins2img,ins3img;
var splashbg,mazebg,mazeinfo,mazeinfoImg;
var scoreboard,scoreboardImg1,scoreboardImg2,scoreboardImg3,scoreboardImg4,scoreboardImg5;
var blast,blastImg,hand,handImg,toolsgImg,inv1,inv2,inv3,inv4;
let count1,start="0";
var step1,step2,step3,stepImg;
var hand1,bomb,bombImg,touch,touchImg;
var engineg;

function preload()
{
    bgImg=loadImage("Images/other-assets/floor.jpg");
    splashbg = loadImage("Images/splashbg.jpg");
    splashlogoImg = loadAnimation("Images/splashlogo2.png","Images/splashlogo1.png");
    splashstartImg = loadImage("Images/start.png");
    mazebg = loadImage("Images/mazebg.jpg");
    mazeinfoImg = loadImage("Images/mazeinfo.png");
    brick1Img = loadImage("Images/brick1.png");
    brick2Img = loadImage("Images/brick2.png");
    brick3Img = loadImage("Images/longbrick.jpg");
    brick4Img = loadAnimation("Images/brick4.png");
    toolsgImg = loadAnimation("Images/toolsg.png");
    scoreboardImg1 = loadAnimation("Images/1.png");
    scoreboardImg2 = loadAnimation("Images/2.png");
    scoreboardImg3 = loadAnimation("Images/3.png");
    scoreboardImg4 = loadAnimation("Images/4.png");
    scoreboardImg5 = loadAnimation("Images/5.png");
    blastImg = loadAnimation("Images/blast.gif");
    handImg = loadImage("Images/hand.gif");

    ins1img=loadImage("Images/ins1.png");
    ins2img=loadImage("Images/ins 2.png");
    ins3img=loadImage("Images/ins 3.png");
    bombImg=loadAnimation("Images/bomb1.gif");
    touchImg=loadImage("Images/touch.png");

    playerImg = loadAnimation("Images/player/player1.png");
    playerKnifeImg=loadAnimation("Images/player/player2.png","Images/player/player4.png","Images/player/player3.png","Images/player/player5.png");
    shipImg=loadImage("Images/Space-ships/spacecraft.png");
    bgImg2=loadImage("Images/other-assets/space.jpg"); 
    stationImg=loadImage("Images/Space-ships/Spacestation.png");
    dockInstructionImg=loadImage("Images/other-assets/Dock-text.png");
    engineImg=loadImage("Images/other-assets/engine.png");
    batteryImg=loadImage("Images/other-assets/battery.png");
    toolImg=loadImage("Images/other-assets/toolkit.png");
    gunImg=loadImage("Images/weapons/guns.jpg");

    plrGunImgleft=loadImage("Images/player-rifle-left.png");
    plrGunImgright=loadImage("Images/player-rifle-right.png");
    enemyImg=loadImage("Images/assasin1.png");
    bossImg=loadImage("Images/James right.png");
    fixedgunImg=loadImage("Images/fixedgunImg.png");
    bulletleftimg=loadImage("Images/bullet-left.png");
    bulletrightimg=loadAnimation("Images/bullet-right.png");
  
  }

function setup()
{
    createCanvas(windowWidth,windowHeight);
    plbulletgroup=new Group();
   
      splashlogo = createSprite(windowWidth/2,290);
      splashlogo.addAnimation("logo",splashlogoImg);
      splashlogo.scale = 1;
      splashstart = createSprite(windowWidth/2,windowHeight/1.42);
      splashstart.addImage(splashstartImg);
      splashstart.scale = 0.23;
      splashlogo.visible = false;
      splashstart.visible = false;

    

      player=createSprite(50,20,60,50);
      player.addAnimation("static",playerImg);
      player.addAnimation("rightmoving",playerKnifeImg);
      player.scale=0.62;
     // player.velocityY = player.velocityYy+0.1;

      mazeinfo=createSprite(windowWidth-120,height/4,60,50);
      mazeinfo.addImage(mazeinfoImg);
      mazeinfo.scale=0.15;
      mazeinfo.visible = false;

      scoreboard=createSprite(windowWidth/2-50,120,60,50);
      scoreboard.addAnimation("1",scoreboardImg1);
      scoreboard.addAnimation("2",scoreboardImg2);
      scoreboard.addAnimation("3",scoreboardImg3);
      scoreboard.addAnimation("4",scoreboardImg4);
      scoreboard.addAnimation("5",scoreboardImg5);

      scoreboard.scale=0.15;
      scoreboard.visible = false;

      blast=createSprite(270,60,10,180); //first vertical top
      blast.addAnimation("blast",blastImg);
      blast.scale = 0.5; 
      blast.visible = false;

      hand=createSprite(400,40,10,180); //first vertical top
      hand.addImage("hand",handImg);
      hand.scale = 0.2; 
      hand.visible = false;

      hand1=createSprite(60,400,10,180); //first vertical top
      hand1.addImage("hand",handImg);
      hand1.scale = 0.2; 
      hand1.visible = false;

      inv1=createSprite(380,height-50,10,380); //first vertical top
      inv1.scale = 0.2; 
      inv1.visible = false;

      inv2=createSprite(width,height-50,10,380); //first vertical top
      inv2.scale = 0.2; 
      inv2.visible = false;

      inv3=createSprite(0,height/3,5,380); //first vertical top
      inv3.visible = false;

      inv4=createSprite(270,290,5,380); //first vertical top
      inv4.visible = false;

      bomb=createSprite(20,height/2.5,10,380); //first vertical top
      bomb.addAnimation("bomb",bombImg);
      //bomb.scale = 0.2; 
      bomb.visible = false;
      bomb.velocityX = 2;

      
      touch=createSprite(260,240,10,180); //first vertical top
      touch.addImage("touch",touchImg);
      touch.scale = 0.13; 
      touch.visible = false;
     

        wall1=createSprite(270,90,10,180); //first vertical top
        wall1.rotation=0;
        wall1.addImage(brick2Img);
        wall1.scale = 0.2; 

        wall4=createSprite(130,590,10,180);//first vertical bottom    
        wall4.rotation=0;    
        wall4.addImage(brick2Img);   
        wall4.scale=0.2; 

        wall6=createSprite(550,640,600,10); //first horizontal bottom    
        wall6.rotation=0; 
        wall6.addImage(brick1Img);   
        wall6.scale=0.2; 
        
    
      wall6.velocityX = 3;
 
     

        wall7=createSprite(670,500,600,10);//second horizontal bottom
        wall7.rotation=0;
        wall7.addImage(brick3Img);
        wall7.scale = 0.2; 

        wall8=createSprite(270,290,10,100); //second vertical top
        wall8.rotation=0;
        wall8.addImage(brick2Img);
        wall8.scale = 0.2;   

        wall9=createSprite(510,90,10,180); //third vertical top
        wall9.rotation=0;
        wall9.addImage(brick2Img);
        wall9.scale = 0.2;   


        wall10=createSprite(805,99,10,400); //fourth vertical top
        wall10.rotation=0;
        wall10.addImage(brick2Img);
        wall10.scale = 0.2; 

        wall11=createSprite(932,290,300,10); //third horizontal middle 
        wall11.rotation=0;
        wall11.addImage(brick1Img);
        wall11.scale = 0.2; 

        wall12=createSprite(1058,99,10,400); //fourth vertical top
        wall12.rotation=0;
        wall12.addImage(brick2Img);
        wall12.scale = 0.2;

        fbwall=createSprite(80,165,200,10); //fourth vertical top
        fbwall.rotation=0;
        fbwall.addImage(brick1Img);
        fbwall.scale=0.2;

        toolswall=createSprite(400,135,200,10); //fourth vertical top
        toolswall.rotation=0;
        toolswall.addAnimation("brick",brick4Img);
        toolswall.addAnimation("toolsg",toolsgImg);
        toolswall.scale=0.15;

        engine=createSprite(130,height/3,50,50); 
        engine.addImage(engineImg);
        engine.scale=0.18;

        battery=createSprite(60,height-220,50,50);
        battery.addImage(batteryImg);
        battery.scale=0.4;

        tools=createSprite(400,90,50,50);
        tools.addImage(toolImg);
        tools.scale=0.2;

        

        workShop=createSprite(935,130,20,20);
        workShop.addImage(gunImg);
        workShop.scale=0.4;

        step1 = createSprite(65,height-34,10,10);
        step1.addImage(brick3Img);
        step1.scale = 0.2;
        step1.visible = false;

        step2 = createSprite(-20,height-99,10,10);
        step2.addImage(brick3Img);
        step2.scale = 0.2;
        step2.visible = false;

      
        step3 = createSprite(-105,height-164,10,10);
        step3.addImage(brick3Img);
        step3.scale = 0.2;
        step3.visible = false;

        engineg = createSprite(50,height-159,10,10);
        engineg.addAnimation("engine",toolsgImg);
        engineg.scale = 0.12;
        engineg.visible = false;

        player.visible = false;
        wall1.visible = false;
       // wall2.visible = false;
        //wall3.visible = false;
        wall4.visible = false;
        //wall5.visible = false;
        wall6.visible = false;
        wall7.visible = false;
        wall8.visible = false;
        wall9.visible = false;
        wall10.visible = false;
        wall11.visible = false;
        wall12.visible = false;
        fbwall.visible = false;
        toolswall.visible = false;
        engine.visible = false;
        battery.visible = false;
        tools.visible = false;
        workShop.visible = false;

     
    if(gameState==="level2")
    {
      ins2=createSprite(windowWidth/2-110,windowHeight/4,10,10);
        ins2.addImage(ins2img);
        
        ship=createSprite(windowWidth-windowWidth/1.2,windowHeight/2,50, 50);
        ship.addImage(shipImg);
        ship.scale=0.5;
        //ship.debug=true;
      
        station=createSprite(windowWidth/2+300,windowHeight/2-50,10,10);
        station.addImage(stationImg);
        station.scale=2.0;
                
        //station.debug=true;
        
        landing= createSprite(windowWidth/2+500,windowHeight/2-50,10,10);
        landing.visibility=false;
        //landing.debug=true;
 //       called=1; 
        img=createSprite(900,200);
        img.addImage(dockInstructionImg);
        //img.debug=true;
       
    }
    if(gameState==="level3")
    {
       
        ins2.destroy();
        ins3=createSprite(windowWidth/2,windowHeight/4,10,10);
        ins3.addImage(ins3img);
       
        bulletGrp1=new Group();
          
        plrGun=createSprite( 1285,550,20,20 );
        plrGun.addImage("player",plrGunImgleft);
        plrGun.scale=0.5
      
        obst1=createSprite( innerWidth/2+50,innerHeight/2,10,450 ); 
        obst2=createSprite( plrGun.x-200,innerHeight/2,10,450 ); 
        
        fixedgun1=createSprite( 250,100,20,20 );
        fixedgun1.addImage("guns1",fixedgunImg);
        fixedgun1.scale=0.8;
      
        fixedgun2=createSprite( 250,250,20,20 );
        fixedgun2.addImage("guns2",fixedgunImg);
        fixedgun2.scale=0.8;
      
        fixedgun3=createSprite( 250,400,20,20 );
        fixedgun3.addImage("guns3",fixedgunImg);
        fixedgun3.scale=0.8;
      
        fixedgun4=createSprite( 250,550,20,20 );
        fixedgun4.addImage("guns4",fixedgunImg);
        fixedgun4.scale=0.8;
      
        enemy1=createSprite( obst1.x-20,obst1.y+30,20,20 );
        enemy1.addImage("enemy1",enemyImg);
        enemy1.scale=1.5;
      
        enemy2=createSprite( obst1.x-20, obst1.y-30,20,20 );
        enemy2.addImage("enemy2",enemyImg);
        enemy2.scale=1.5;
      
        boss=createSprite( 70,300,20,20 );
        boss.addImage("boss",bossImg);
        boss.velocityY=-2;
        edges=createEdgeSprites();
      
      
        enemy1.velocityY=-2;
        enemy2.velocityY=2;
        plbulletgroup=new Group();
      
      }
     if(gameState==="level4")
       {
      //   bg=createSprite(windowWidth/2,windowHeight/2,100,100);
      //   bg.addImage(bgImg2);
      //   bg.scale=0.4;
       end=createElement('h1');
       rest=createButton('Replay');
      
       }
  }

function draw()
{
    edges=createEdgeSprites();

    if(gameState==="start")
    {
      background(splashbg); 
      splashlogo.visible = true;
      splashstart.visible = true; 
      if(mousePressedOver(splashstart))
      {
        gameState = "level1";
      }
    }
        
    if(gameState==="level1")
    {
      background(mazebg);

      splashlogo.visible = false;
      splashstart.visible = false; 
      scoreboard.visible = true; 
      player.visible = true;
      wall1.visible = true;
      //wall2.visible = true;
      //wall3.visible = true;
      wall4.visible = true;
      //wall5.visible = true;
      wall6.visible = true;
      wall7.visible = true;
      wall8.visible = true;
      wall9.visible = true;
      wall10.visible = true;
      wall11.visible = true;
      wall12.visible = true;
      engine.visible = true;
      battery.visible = true;
      tools.visible = true;
      workShop.visible = true;
      mazeinfo.visible = true;
      fbwall.visible = true;
      toolswall.visible = true;
      step1.visible = true;
      step2.visible = true;
      step3.visible = true;

      player.velocityX=0;
   
      if(wall6.isTouching(inv2))
      {
       wall6.velocityX = -3;
      }
      else if(wall6.isTouching(inv1)){
        wall6.velocityX = 3;
      }
      if(bomb.isTouching(inv4))
      {
        bomb.velocityX =-2;
      }
      if(bomb.isTouching(inv3))
      {
        bomb.velocityX = 2;
      }
  


      console.log(score)
      level1();
      if(player.isTouching(workShop))
      {
          gameState="level2";
          setup(); 
            
      }
    }
    if(gameState==="level2")
    {
      
      level2();

      if(ship.isTouching(landing))
      {
    //     fill('white');
    //    console.log("Landed");
          gameState="level3";
          //bg.destroy();
          setup();
      }
    }
    
    if(gameState==="level3")
    {
      
      level3();

   //   if(ship.isTouching(landing))
     // {
    //     fill('white');
    //    console.log("Landed");
       //   gameState="level3";
   //       setup();
    //  }
    }

    
    if(life===5 && plr=="true")
    {
      plrGun.destroy();
  
       plr="false";
       gameState="level4";
       setup();
    }


    
   if(gameState==="level4")
{
  level4();
}
 

    //text(mouseX+" "+mouseY,mouseX,mouseY);
    drawSprites();
    
}

function level1()
{

    if(player.isTouching(wall6))
    {
      player.x = wall6.x-30;
      player.y = wall6.y;
      hand1.visible = true;
     if(wall6.isTouching(step1))
     {
       player.x = step1.x+200;
       player.y = step1.y-70;
       hand1.visible = true;
       engineg.visible = true;
       wall8.rotation = 90;
       wall8.y = 185;
       wall8.x = 310;

     }
    }

   
    if(keyDown("RIGHT_ARROW")){
      player.changeAnimation("rightmoving",playerKnifeImg);
      player.velocityX+=8;
      if(blast.visible){
      toolswall.changeAnimation("toolsg",toolsgImg);
      blast.destroy();
      hand.visible = true;
      toolswall.scale = 0.1;
    }
    }
    if(keyWentDown("g")&&score === 0)
    {
      toolswall.destroy();
      tools.destroy();
      hand.destroy();
      score=1;
      scoreboard.changeAnimation("2",scoreboardImg2);
     }
     else if(keyWentDown("g")&&score === 1)
     {
      battery.destroy();
      hand1.destroy();
      score=2;
      scoreboard.changeAnimation("3",scoreboardImg3);
      bomb.visible = true;
      touch.visible = true;
      engineg.destroy();

     }
     if(player.isTouching(engine)&&score === 2)
     {
       score = 3;
       engine.destroy();
       touch.destroy();
       scoreboard.changeAnimation("4",scoreboardImg4);
       bomb.destroy();
     }
     
     
    
    if(keyWentUp("RIGHT_ARROW")){
      player.changeAnimation("static",playerImg);
    }
    if(keyDown("LEFT_ARROW")){
      player.x-=8;
    }

    if(keyDown("UP_ARROW")){
      player.y-=8;
    }

    if(keyDown("DOWN_ARROW")){
      player.y+=8;
    }

    if(keyDown("j")&&player.y>=200&&player.y<=height){
      player.velocityY = -10;
    }
    player.velocityY = player.velocityY+1;

    if (keyWentDown("space")){
      var plBullet=createSprite(player.x+60,player.y-20);
      plBullet.addAnimation("bullet",bulletrightimg);
      plBullet.velocityX=15;
      plBullet.scale=0.1;
      plbulletgroup.add(plBullet);
    }
    for(var x=0;x<plbulletgroup.length;x++)
    {
      if(wall1!==undefined && plbulletgroup.isTouching(wall1))
      {       
        plbulletgroup[x].destroy();
          wall1.destroy();
          blast.visible = true;
         // wall1=undefined;

      }
    }

   
   
   
    if(player.isTouching(workShop))
    {
      workShop.destroy();
      score =4;
    }
    if(score===4 && player.x>1000 &&player.y<350)
    {
      scoreboard.changeAnimation("4",scoreboardImg4);
      wall11.y=wall11.y-50;
    }

    player.collide(wall1);
    //player.collide(wall2);
    //player.collide(wall3);
    player.collide(wall4);
    //player.collide(wall5);
    player.collide(wall6);
    player.collide(wall7);
    player.collide(wall8);
    player.collide(wall9);
    player.collide(wall10);
    player.collide(wall11);
    player.collide(wall12);
    player.collide(fbwall);
    player.collide(toolswall);
    player.collide(step1);
    player.collide(step2);
    player.collide(step3);

    //player.bounceOff(edges);
    

}

function level2()
{
        if (ship.x<0 || ship.x>1990 || ship.y<50 || ship.y>750)
        {
          textSize(24);
          fill('white')
          text("Return to area or you will expload",ship.x,ship.y);
          
        }
            //console.log(ship.y);
        
        if(keyDown("RIGHT_ARROW")){
          ship.x=ship.x+5;
        }
        if(keyDown("LEFT_ARROW")){
          ship.x=ship.x-5;
        }
        if(keyDown("UP_ARROW")){
          ship.y=ship.y-5;
        }
        if(keyDown("DOWN_ARROW")){
          ship.y=ship.y+5;
        }
       
}

function level3()
{
  if (keyWentDown("space")){
    var plBullet=createSprite(plrGun.x,plrGun.y+10);
    plBullet.addImage("bullet",bulletleftimg);
    plBullet.velocityX=-15;
    plBullet.scale=0.1;
    plbulletgroup.add(plBullet);
  }
  
  for(var x=0;x<plbulletgroup.length;x++)
{
  if(enemy1!==undefined && plbulletgroup[x].isTouching(enemy1))
  {
    plbulletgroup[x].destroy();
    en++;
    if(en===2)
    {
      enemy1.destroy();
      enemy1=undefined;
    }
    continue;
  }
  
  if(enemy2!==undefined && plbulletgroup[x].isTouching(enemy2))
  {
    plbulletgroup[x].destroy();
    en2++;
    if(en2===2)
    {
      enemy2.destroy();
      enemy2=undefined;
    }
    continue;
  }
  if(fixedgun1!==undefined && plbulletgroup[x].isTouching(fixedgun1))
  {
    plbulletgroup[x].destroy();
    fg1++;
    if(fg1===2)
    {
      fixedgun1.destroy();
      fixedgun1=undefined;
    }
    continue;
  }
  if(fixedgun2!==undefined && plbulletgroup[x].isTouching(fixedgun2))
  {
    plbulletgroup[x].destroy();
    fg2++;
    if(fg2===2)
    {
      fixedgun2.destroy();
      fixedgun2=undefined;
    }
    continue;
  }
  if(fixedgun3!==undefined && plbulletgroup[x].isTouching(fixedgun3))
  {
    plbulletgroup[x].destroy();
    fg3++;
    if(fg3===2)
    {
      fixedgun3.destroy();
      fixedgun3=undefined;
    }
    continue;
  }
  if(fixedgun4!==undefined && plbulletgroup[x].isTouching(fixedgun4))
  {
    plbulletgroup[x].destroy();
    fg4++;
    if(fg4===2)
    {
      fixedgun4.destroy();
      fixedgun4=undefined;
    }
    continue;
  }
  if(boss!==undefined && plbulletgroup[x].isTouching(boss))
  {
    plbulletgroup[x].destroy();
    bs++;
    if(bs===10)
    {
      boss.destroy();
      boss=undefined;
    }
    continue;
  }
  
  

  }



  
  plrGun.bounceOff(obst1);
  plrGun.bounceOff(obst2);
  
  // plrGun.velocityX=0;
  // plrGun.velocityY=0;   

  if(keyDown("right")){
    plrGun.x=plrGun.x+8;
    plrGun.y=plrGun.y-0;
    
    //plrGun.velocityX=0;
    // plrGun.velocityY=-8;
  }
  if(keyDown("up")){
    plrGun.x=plrGun.x+0;
    plrGun.y=plrGun.y-8;
    
    //plrGun.velocityX=0;
    // plrGun.velocityY=-8;
  }
  if(keyDown("down")){
    plrGun.x=plrGun.x+0;
    plrGun.y=plrGun.y+8;
   
  //   plrGun.velocityX=0;
  //   plrGun.velocityY=8;
   }
  if(keyDown("left")){
    plrGun.x=plrGun.x-8;
    plrGun.y=plrGun.y+0;
   

    // plrGun.velocityX=-8;
    // plrGun.velocityY=0;
    plrGun.addImage("player",plrGunImgleft);
  }
  if(keyDown("right")){
    plrGun.x=plrGun.x-8;
    plrGun.y=plrGun.y+0;
   

    // plrGun.velocityX=9;
    // plrGun.velocityY=0;
    plrGun.addImage("player",plrGunImgright);
  }
  if(frameCount%60===0)
  { 
    
    if(fixedgun1!==undefined)
    {
      bullet1=createSprite(fixedgun1.x+60,fixedgun1.y-60,10,10);
      bullet1.addImage(bulletrightimg);
      bullet1.velocityX=4;
      bullet1.scale= 0.1;
      bulletGrp1.add(bullet1);
     
    }
    if(fixedgun2!==undefined)
    {
      bullet2=createSprite(fixedgun2.x+60,fixedgun2.y-60,10,10);
      bullet2.addImage(bulletrightimg)
      bullet2.velocityX=4;
      bullet2.scale= 0.1;
      bulletGrp1.add(bullet2);
    
    }
    if(fixedgun3!==undefined)
   {
    bullet3=createSprite(fixedgun3.x+60,fixedgun3.y-60,10,10);
    bullet3.addImage(bulletrightimg)
    bullet3.velocityX=4;
    bullet3.scale= 0.1;
    bulletGrp1.add(bullet3);
      
   }
    
   if(fixedgun4!=undefined)
 {
    bullet4=createSprite(fixedgun4.x+60,fixedgun4.y-60,10,10);
    bullet4.addImage(bulletrightimg)
    
    bullet4.velocityX=4;

    bullet4.scale= 0.1;
    bulletGrp1.add(bullet4);
   //console.log(fixedgun4);
 }
    
  }
  if(enemy1!==undefined)
  {
    enemy1.bounceOff(edges[2]);
    enemy1.bounceOff(edges[3]);
  }
  if(enemy2!==undefined)
  {
enemy2.bounceOff(edges[2]);
enemy2.bounceOff(edges[3]);
  }
  if(boss!==undefined)
  {
boss.bounceOff(edges[2]);
boss.bounceOff(edges[3]);
  }

for(var x=0;x<bulletGrp1.length;x++)
{
  if(bulletGrp1[x].isTouching(plrGun)&&plr!=="false")
  {
    bulletGrp1[x].destroy();
    life++;
    
  }
    
  }
  
  


}
function level4()
{
  end.html("Thats the end")
  end.position(200,200);

 
  rest.position(600,200);
  rest.mousePressed(function(){
    gameState="level1";
    setup();
    end.hide();
    rest.hide();
  })


}
function mouseClicked() {
  // hide the circle for 3 seconds
  disableDisplayUntil = millis() + 3000;
}