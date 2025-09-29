// import React, { useEffect, useRef } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const reels = [
//   {
//     embedHtml: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DG27I1qStWZ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:calc(100% - 2px);"></blockquote>`
//   },
//   {
//     embedHtml: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DOYT_hMjv4l/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:calc(100% - 2px);"></blockquote>`
//   },
//   {
//     embedHtml: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DHVy_xFMcTS/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:calc(100% - 2px);"></blockquote>`
//   },
//   {
//     embedHtml: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DKHktkBtMAu/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:calc(100% - 2px);"></blockquote>`
//   },
// ];

// function InstagramEmbed({ embedHtml }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.innerHTML = embedHtml;
//       if (window.instgrm) {
//         window.instgrm.Embeds.process();
//       }
//     }
//   }, [embedHtml]);

//   // Load Instagram Embed Script once
//   useEffect(() => {
//     if (!window.instgrm) {
//       const script = document.createElement('script');
//       script.src = "https://www.instagram.com/embed.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return <div ref={ref}></div>;
// }


// const ReelsCarousel = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <section className="py- bg-primary-skin pb-10">
//       <div className="container mx-auto px-4">
//         {/* <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal text-center mb-12">
//           Our Instagram Reels
//         </h2> */}

//         <Slider ref={sliderRef} {...settings} className="focus:outline-none">
//           {reels.map((reel, idx) => (
//             <div key={idx} className="px-4 focus:outline-none cursor-pointer">
//               <div className="p-6 rounded-lg transition-shadow duration-300">
//                 <InstagramEmbed embedHtml={reel.embedHtml} />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default ReelsCarousel;