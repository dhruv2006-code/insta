let users = [
  {
    username: "alex_adventures",
    profilepic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    isliked: true,
    commentcount: 142,
    likecount: 3890,
    description: "Caught the sunset over the ridge after a 5-hour hike! 🏔️✨ #hiking #outdoors",
    sharecount: 87,
    isfollowed: false,
    video: "./video1.mp4"
  },
  {
    username: "chef_marina",
    profilepic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    isliked: false,
    commentcount: 89,
    likecount: 1250,
    description: "Homemade sourdough fresh out of the oven. Recipe in bio! 🥖🍞",
    sharecount: 45,
    isfollowed: true,
    video: "./video2.mp4"
  },
  {
    username: "tech_insights",
    profilepic: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150",
    isliked: true,
    commentcount: 512,
    likecount: 14200,
    description: "Top 5 VS Code extensions you should be using in 2026. Thread below 👇",
    sharecount: 1205,
    isfollowed: true,
    video: "./video3.mp4"
  },
  {
    username: "urban_lens",
    profilepic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    isliked: false,
    commentcount: 23,
    likecount: 410,
    description: "Rainy neon lights in Tokyo tonight ☔️🏮 #streetphotography",
    sharecount: 12,
    isfollowed: false,
    video: "./video4.mp4"
  },
  {
    username: "fitness_realm",
    profilepic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    isliked: true,
    commentcount: 276,
    likecount: 8920,
    description: "Consistency > Perfection. Day 45 of full body conditioning! 💪🏋️‍♀️",
    sharecount: 340,
    isfollowed: false,
    video: "./video5.mp4"
  },
  {
    username: "cosmic_art",
    profilepic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    isliked: false,
    commentcount: 64,
    likecount: 2150,
    description: "Finished my latest 3D digital illustration! What do you guys think? 🎨✨",
    sharecount: 98,
    isfollowed: true,
    video: "./video6.mp4"
  }
];
let allReels = document.querySelector('.all-reels');
    let clutter = '';

users.forEach(function(elem){
    clutter += `                    
                <div class="reel">
                    <video autoplay muted loop src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="info">
                            <img class="profile-pic" src="${elem.profilepic}" alt="">
                            <h4>${elem.username}</h4>
                            <button class="follow">${`${elem.isfollowed? "Followed":"Follow"}`}</button>
                    </div>
                        <h5>${elem.description}</h5>
                    </div>
                     <div class="icons">
                        <div class="like">
                        ${elem.isliked? `<i id= "liked" class="ri-heart-3-fill"></i>`:`<i class="ri-heart-3-line"></i>`}
                        
                        <h4>${elem.likecount}</h4>    
                        </div>
                        <div class="comment">
                           <i class="ri-chat-3-fill"></i>
                        <h4>${elem.commentcount}</h4>
                        </div>
                        
                        <div class="share">
                      <i class="ri-share-forward-line"></i>
                        <h4>${elem.sharecount}</h4>
                        </div>
                        <i class="ri-more-2-fill"></i>
                    </div>
                </div>
               `
                
                allReels.innerHTML = clutter;
})