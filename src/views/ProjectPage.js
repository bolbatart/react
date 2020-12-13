import React from 'react'
import styled from 'styled-components';
import NavBar from 'components/HeaderMenu/NavBar';
import Footer from 'components/Footer/Footer'
import AvatarImg from 'images/avatar.jpg';
import Comments from 'components/comments/Commnets';

const ProjectPage = () => {
  return (
    <StyledProjectPage>
      {/* HEADER */}
      <div className="header">
        <h1 className='name'>your project name</h1>
        <p className='area-country'>Project area / Country</p>
      </div>
      {/* MAIN */}
      <div className="pr-main">
        <div className="pr-desc">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, iure atque non aliquam corrupti error, nostrum sapiente veniam corporis ipsam consequatur vero in velit obcaecati cumque. Quasi maiores delectus voluptas.
            Distinctio dolorem rerum voluptatum tenetur at animi! Voluptatibus, nihil. In, ipsa sit similique hic fugit facere cupiditate praesentium minus animi vero laboriosam, ea explicabo deleniti accusantium, unde amet iure libero.
            Excepturi laudantium quaerat, ullam aut odit blanditiis odio consequuntur, veniam sequi, fuga cupiditate dolore provident officiis perspiciatis dolor at in debitis fugit voluptas totam et quidem. Deleniti aperiam possimus optio?
            Sunt non unde, earum cupiditate tempora expedita repudiandae, quo dolorum velit ullam molestias necessitatibus vitae? Eos debitis pariatur, maxime facere cumque provident, accusantium architecto aperiam hic tenetur, consequatur neque mollitia!
            Assumenda, esse veniam sunt sequi possimus eum officiis consequatur vero soluta obcaecati illo corporis nesciunt optio deserunt inventore quisquam amet doloremque. Voluptatum asperiores qui fugit, reiciendis deserunt ducimus assumenda distinctio.
            Placeat vitae est deserunt doloremque cum similique. Error tempora itaque unde, nisi optio vitae autem rerum dolores pariatur illum cum id, ea in consequuntur quos voluptas minima ipsa! Minus, doloremque?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id illum debitis fugiat reprehenderit dolores voluptates magnam labore rerum, ab, ratione, nam fugit animi repellat modi natus? Suscipit expedita fuga delectus.
            Maxime ipsum vel libero nostrum quibusdam numquam est neque qui quas porro, dolore eveniet, ipsam repellat a? Sapiente non atque consequatur, eum sequi dicta quae tempora, quam in voluptate dolore?
            Ipsum magni modi, consequatur tempora dignissimos eveniet hic ipsam incidunt facilis sequi natus, explicabo nam deleniti et impedit aliquam velit esse non, praesentium voluptatibus blanditiis ut. Optio tempore in aperiam.
            Labore pariatur asperiores culpa vel sapiente error autem! Quaerat perspiciatis officia iure minus aperiam vero odit. At, perspiciatis repudiandae libero assumenda totam ducimus facere est, repellat possimus fuga ipsum nam.
            Minima dicta velit adipisci suscipit id optio unde quidem mollitia tenetur amet necessitatibus incidunt fuga saepe dolores, itaque aliquid! Vitae suscipit delectus blanditiis provident nisi, excepturi perspiciatis minus quo minima.
            Repudiandae ipsum, minus pariatur veniam quas commodi deleniti facere repellat similique soluta nisi rerum beatae ratione tenetur possimus. Eos provident soluta eius itaque nihil recusandae. Exercitationem aperiam dolores error eum?
            Architecto velit fuga, ex dicta minima aperiam distinctio quae unde illo magnam ea ab maiores error quos facere repellendus vitae illum sed aliquam autem sit? Rerum, eum ad! Inventore, doloremque.
            Quisquam, minima. Cumque deleniti rerum sunt tempore iusto asperiores atque possimus iure nam dolores voluptas dolore nihil laboriosam blanditiis provident illo totam temporibus aspernatur eveniet, similique doloribus? Assumenda, voluptates a!
            Dolorem vitae, voluptatibus iusto blanditiis sequi, laboriosam ex porro dicta officia qui nihil illum cupiditate. Provident facere eligendi cumque optio, fuga voluptatum eius? Laboriosam consequatur amet, deserunt repellat nemo a?
            Nisi doloribus id ut exercitationem iste possimus natus laborum aliquid commodi dolorem debitis accusantium soluta, odio enim autem minus nulla ipsa magni nemo. Nemo ipsa cum amet sint illo neque?
            Qui vero tempora illum cum magni non quam quidem sit, perferendis voluptatem facilis eaque eius totam! Nisi reprehenderit quas excepturi officia ab pariatur, aspernatur molestias natus atque temporibus optio explicabo.
            Beatae laudantium doloribus facere eum excepturi sequi autem perferendis odit placeat, sed sint qui minus aut ad eius assumenda nisi. Similique saepe libero consequuntur, rem molestiae ullam commodi voluptas officiis!
            Ut tempore consectetur corporis nisi saepe alias ex officia? Nam ipsam, ipsa eum voluptatem, nesciunt possimus voluptate temporibus provident praesentium natus repellat rerum quos consequatur non, inventore architecto reprehenderit totam!
            Quae molestias quasi facilis voluptas quidem in quia beatae doloribus repellendus. Explicabo incidunt, nam totam cupiditate harum sed assumenda recusandae nostrum fugit? Eius ad magni excepturi! Veritatis soluta magnam ipsa?
            Harum molestiae praesentium veritatis voluptate explicabo ab quis, possimus id? Magnam illo omnis accusantium laboriosam et asperiores minus reiciendis? Totam porro nihil aperiam numquam? Eos maxime nesciunt quas minima debitis?
          </p>
        </div>
        {/* RIGHT PANEL */}
        <div className="right-info">
          {/* AUTHOR */}
          <div className="info-item">
            <div className="author-wrapper">
              <img className='rounded-circle' src={AvatarImg} alt=""/>
              <div className="author-desc">
                <h6>Jason</h6>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
                </p>
              </div>
            </div>
            <button className="info-btn btn btn-outline-primary">Message me</button>
          </div>
          {/* JOB POSITION */}
          <div className="info-item">
            <h4>Job positions</h4>
            <div className="position-item">
              <h6>Designer</h6>
              <p>Information</p>  
            </div>
            <div className="position-item">
              <h6>IT person</h6>
              <p>Information</p>  
            </div>
            <div className="position-item">
              <h6>IT person</h6>
              <p>Information</p>  
            </div>
            <button className="btn btn-primary info-btn">Apply now</button>
          </div>
          {/* BUDGET */}
          <div className="info-item">
            <h4>Budget goal</h4>
            <div className="budget-item">
              <h6>400 000$</h6>
              <p>Information</p>
            </div>
            <div className="budget-item">
              <div className="progress" style={{height: '20px'}}>
                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>170 000$</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COMMENTS */}
      <Comments />

    </StyledProjectPage>
  )
}

export default ProjectPage

const StyledProjectPage = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 310px;
    background-color: #f0f8ff;
    margin: 0 0 67px;
    .name {
      font-size: 78px;
      font-weight: bold;
    }
    .area-country {
      font-size: 26px;
    }
  }

  .pr-main {
    margin: auto;
    max-width: 1500px;
    display: flex;
    .pr-desc {
      max-width: 1000px;
    }
  }
  
  /* RIGTH PANEL */
  .right-info {
    max-width: 500px;
    margin: 0 0 0 100px;
  }

  .author-wrapper {
    display: flex;
    img {
      margin: 0 32px 0 0;
      width: 150px;
    }
  }
  
  button.info-btn {
    margin: 16px 0 0 ;
    width: 100%;
    font-size: 16px;
  }

  .info-item {
    margin: 32px 0 0 ;
    h4 {
      margin: 0 0 24px;
    }
    .position-item, .budget-item {
      margin: 0 0 16px;
    }
  }

  /* COMMENTS */


`;