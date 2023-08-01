function testimonial1Go(){
   
    document.querySelector(".testimonial1").innerHTML = ` <div class="testimonial1">
         <div class="rating">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
  </div>
  <div class="headline">Love the Developer Experience and Design Principles!</div>
  <blockquote class="comment">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis saepe dicta dignissimos, blanditiis nobis temporibus quaerat placeat quia perspiciatis quod odit quo architecto minima enim voluptate rem illo veniam vero perferendis inventore incidunt nemo ab natus. Dicta explicabo, vel nihil quam ducimus nemo animi qui deserunt amet iure, sunt autem esse quis?
  </blockquote>
  <div class="profile--wrapper">
    <div class="profile">
      <figure class="profile__img--wrapper">
        <img
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80"
          alt=""
          class="profile__img"
        />
      </figure>
      <div class="about">
        <h5 class="profile-name">Adam Cuppy</h5>
        <p class="address">Founder, EventsNYC</p>
      </div>
    </div>
    <div class="next">
      <button
        class="btn--next2"
        onclick="testimonial2Go()"
      ><i class="fa fa-arrow-left"></i></button>
      <span class="seperator">|</span>
      <button
        class="btn--next2"
        onclick="testimonial2Go()"
      ><i class="fa fa-arrow-right"></i></button>
    </div>
  </div>
  </div>`

    }

function testimonial2Go(){

    document.querySelector(".testimonial1").innerHTML = ` <div class="testimonial1">
        <div class="rating">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
  </div>
  <div class="headline">Amazing User Experience</div>
  <blockquote class="comment">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
    recusandae dolores quasi earum repudiandae ut aperiam.
    Mollitia ea libero suscipit, id veritatis ipsum. Voluptas
    autem voluptate totam necessitatibus cumque repellat
    voluptatum eos repudiandae. Exercitationem, reprehenderit
    iste aperiam, porro odio perferendis iure, eaque
    perspiciatis deserunt inventore ipsam. Cupiditate
    necessitatibus temporibus minima. At, omnis?
  </blockquote>
  <div class="profile--wrapper">
    <div class="profile">
      <figure class="profile__img--wrapper">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80"
          alt=""
          class="profile__img"
        />
      </figure>
      <div class="about">
        <h5 class="profile-name">Charlotte Hale</h5>
        <p class="address">Director, Delos Inc.</p>
      </div>
    </div>
    <div class="next">
        <button
        class="btn--next1"
        onclick="testimonial1Go()"
      ><i class="fa fa-arrow-left"></i></button>
      <span class="seperator">|</span>
      <button
        class="btn--next1"
        onclick="testimonial1Go()"
      ><i class="fa fa-arrow-right"></i></button>
    </div>
  </div>
  </div>`

}

function showComment(number){
    console.log("comment clicked")
    document.querySelector(".faq-comment"+number).classList.toggle("show-comment" + number)
    document.querySelector(".btn-comment"+number).classList.toggle("rotate")
}

function openMenu(){
    document.querySelector("body").classList += " open--menu"
}

function closeMenu(){
    document.querySelector("body").classList.remove("open--menu")
}