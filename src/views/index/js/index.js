/*
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-11-04 15:59:29
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-12 21:46:30
 */
export const controller = new ScrollMagic.Controller()




export function scrollMagicController() {
    // 定义控制器
  
    const bannerSceneOptions = {
      backgroundColor: "#F5F8FA",
      color: "black",
    };
    // 定义场景 Banner
    const bannerScene = new ScrollMagic.Scene({
      offset: 0, // start scene after scrolling for 100px
      duration: "20%", // pin the element for 400px of scrolling
    });
    bannerScene.setTween(".banner", {
      ...bannerSceneOptions,
      minHeight: "50vh",
      marginTop: "20vh",
    });
  
    // Banner Card
    const bannerCardScene = new ScrollMagic.Scene({
      offset: 0, // start scene after scrolling for 100px
      duration: "20%", // pin the element for 400px of scrolling
    });
    bannerCardScene.setTween(".banner .card", {
      ...bannerSceneOptions,
      backgroundColor: "white",
      right: "30%",
      fontSize: 40
    });
  
    // Banner Content
    const bannerContentScene = new ScrollMagic.Scene({
      offset: 0, // start scene after scrolling for 100px
      duration: "20%", // pin the element for 400px of scrolling
    });
    bannerContentScene.setTween(".banner .banner-content", {
      ...bannerSceneOptions,
      left: "25%",
    });
  

  

  
    /* Open Source BEGIN */
  
    // Cat Car
    const mpImages = [
      './images/mp1.png',
      './images/mp3.png',
      './images/mp2.png',
      './images/mp4.png',
      './images/mp5.png',
      './images/mp6.png',
      './images/mp7.png',
      './images/mp8.png',
      './images/mp9.png',
      './images/mp10.png',
    ]
    openSourceTween(mpImages, '.open-source-img')
    // Pc
    const pcImages = [
      './images/pc1.png',
      './images/pc2.png',
      './images/pc3.png',
      './images/pc4.png',
    ]
    openSourceTween(pcImages, '.open-source-pc-img')
  
    function openSourceTween(list = [], el) {
      // TweenMax can tween any property of any object. We use this object to cycle through the array
      const obj = { curImg: 0 };
  
      // create tween
      const tween = TweenMax.to(obj, 0.5,
        {
          curImg: list.length - 1,	// animate propery curImg to number of images
          roundProps: 'curImg',				// only integers so it can be used as an array index
          repeat: 3,									// repeat 3 times
          immediateRender: true,			// load first image automatically
          ease: Linear.easeNone,			// show every image the same ammount of time
          onUpdate: function () {
            document
              .querySelector(el)
              .setAttribute('src', list[obj.curImg])
          }
        }
      )
      // build scene
      new ScrollMagic.Scene({ triggerElement: '.open-source-trigger', duration: 500 })
        .setTween(tween)
        .addTo(controller);
    }
    // /* Open Source END */
  
    // 控制器添加场景
    controller.addScene([
      bannerScene,
      bannerCardScene,
      bannerContentScene
    ]);
  }
 

