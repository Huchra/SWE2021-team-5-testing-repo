import './CameraRoll.css';
import { Link } from 'react-router-dom';
import { BsFillGridFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Background from '../ProBackground';

const CameraRoll = () => (
  <div style={{ backgroundColor: '#f3f5f6' }}>
    <Background />
    <div className="cameraRollNavBar">
      <div className="camRollContainerNavBar">
        <div className="camRollScrollingLayoutNavBar">
          <Link to="/About">About </Link>
          <Link to="/Photostream">Photostream</Link>
          <Link to="/Albums">Albums</Link>
          <Link to="/Faves">Faves</Link>
          <Link to="/Profile/Galleries">Galleries</Link>
          <Link to="/Groups">Groups</Link>
          <Link to="/Stats">Stats</Link>
          <Link className="selectedLinkCamRoll" to="/CameraRoll">CameraRoll</Link>
        </div>
      </div>
    </div>
    <div className="LayoutCamRoll">
      <div className="toolsCameraRollBar">
        <div className="dateTakenCamRoll">
          Data taken &nbsp;
          <MdKeyboardArrowDown />
          <ul id="dateTakenMenu">
            <li>Data taken</li>
            <li>Data uploaded</li>
          </ul>
        </div>
        <div className="toolsCameraRoll">
          <div id="camRollExtraTools">
            <input type="checkbox" id="myCheck" style={{ width: 'min-content', height: 'min-content', margin: '5px' }} />
            <span style={{ margin: '0px' }}>Show info </span>
          </div>
          <div id="camRollLayoutIcons">
            <li><BsFillGridFill /></li>
            &nbsp;&nbsp;
            <li><BsFillGrid3X3GapFill /></li>
          </div>
        </div>
      </div>
      <div className="viewCameraRoll">
        <div className="sideNavBarCameraRoll">
          <ul className="yearsCamRoll">
            <li>2021</li>
            <ul style={{ display: 'none' }} className="monthCamRoll">
              <li>April</li>
            </ul>
            <li>2020</li>
            <ul style={{ display: 'none' }} className="monthCamRoll">
              <li>Januray</li>
            </ul>
          </ul>
        </div>
        <div className="photosCameraRoll">
          <h4 style={{ width: 'max-content', color: '#959595' }}>Date</h4>
          <div className="imgContainerCameraRoll">
            <img src="https://images.squarespace-cdn.com/content/v1/5f21b11aaf514f59e25e0dfa/1596126419368-1C8987NZNDXA5P4PFO25/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/image-asset.jpeg?format=2500w" alt="" />
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYZGBgaHBweGhwcGh8hGh4aGhoaHBwcHiMcIS4lHiMrIRocJjgnKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHjQsJCs0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALgBEgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAD0QAAIBAgQDBQYFBAEDBQEAAAECEQAhAwQSMUFRYQUicYGREzKhscHwBkJS0eEUFWLxgpKisiMzU3LSFv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAJxEAAgICAwACAgEFAQAAAAAAAAECERIhAzFBUWETIjIEQoGR0RT/2gAMAwEAAhEDEQA/APN9l5tkZGDQQylYMEMDaOW1ev7YzD5jA9sSoI7pCqFDsxFzfeBuB+XgIrweXAkReDMb7XP71qY2dJQD3VF9uN9XoKwT88MmKYKe0x0Qfk7zHhaDHrAJ6Cj9qY8sROwj/Vd/DyE+0xTxsPK+w8q5hsmIYdINzqG8bknp+5vTbxRUtaO5FtQeZ90QREjvD1plWOsiQTz5iBvHG3woeWywUPDrcW9QZ+HCrI6hu7sALxx41Lkm9CQ9mGhCTN54cxH1pXD39PIReq6yVA1E91vMVMu51kbARfxXpSSpNAuhvLONQEQIPHfl501qNjJ4ADjB53+dJ4OrXFiIuevC/EdKPj42ljPMbX5+mw9DXPKP7aJa2N5cbERH+7eNaeA3QX+/EbVnZbEU85tA+u9aiupCiI5n724CKzfYhhUn48/vzqqsUa5JHIn7+4ruDi6RuPs8OdBxMeXgG8SfOw+Rq6QB8zmAJOgExwOwrK7cIfBOrSpsy85gQB0IMSJppcM3ad4Hhvz6UvmVkCSNIGogRMiAJngOVutVBrK6CxXsvtHEbDCq7CJkBiBtY2N7A+lVzOLpIaZnw28+OxrPxVGFix+R79IJjxsfgaZzAg2a5sBBOwNqudf8CXyO5bMFjIE8DMW/bxo+JiQCTbwkg3vaw57VhYTwLNxEbSfWiLmTOpi54WN55eHhzqHFvolGoxlSJIiZCk7bBtrcKzu0M/o7jM5IFwQDE8ydqI2fZVCmQI0hbSSAJ2vvFJ5pe4BpJeYIInfhe8z/AOPWkoq9jFVzA1a3uDYibkHcHmYO966MUMHVF1BidIAss7TO8D5A0pmMowbiyiCzcBOwEWG1MZZwJCqQLkNrNheTBF9ora0loZMjk9idStqQwdiAwJggzMAiPA1r9pdqHSVLu+oiQxknSTMDZRxNYuZzQGo6mkXiBB69eVooXa8g6ogmIE7DjsYqlKTDYzmu0NIABsYkQD8+hFE/uBgouJGoQSLHbvEEbTEfwawMy5PePQAcqv7QWsZ9aqvSgyYhRxG4B0iQek78Zph1dWBYy0EswGqAQxEFrSb+g3pL2jEh95BBm8cPWB6Uu+ZJkAysWB2FxJEGJtHrUtNsTTGcV5bYKIIUXiJMG97zPlTJy6oA5IBA2O6yDBO88IG3OgFHMHTA/U22wA38rdKKuUD95yYttE6uU7fOlYhN8RjLm87AmNRNgY6eVOKiBVVu+BJO4vb8xIhB0knewmhthqIW0r4bA3LFukgW4eNdw8D2jS7Qgk794zsQI269aJVQmE/uiiwQwNoNvLu12p7TBFvZrbx//NSpqICuQQqxmCbwPD61O0dQUD8pk8eBFvQLT+N2aVLBVb3geN9ZJmTsAAdprPdfaYoQbC0xNhuR0Naf3UaxSyNjs3BZMJBJgqzMAJktf1G2/OkXxO8wiLnhBj1MeE1pa9RIUiFQrEkSQDBt4cOZpT24TULkkX63J/MLcDsZob/bQSdsCmMRq5afE2242vFNZZw7MZ5b7mRt61n4QkOSCBt4XA896c7OTQzTcQD1ptKhItiMO6ehsOEt68KK8hXYQDwP/ECuY6XHT5FjarvdGjnR2NBcs5a7Qp4xtYD03ND7UxtTnvRYGOEgGKpgs0kSt+B+p+9qHiqxdlPBdhtFtuVZ1+zJ9NPJuxvxgEjfh+1bWUzQ3m/Sd/uaxMNVBsBAVbinw5G208hXPNb0SzYIsIiL+VKNiXJiTbjyAq2GZFj5UBc0knY3iTwFVB2gGVYnqp5nnWdm1GrUSVOwAjrOw6/CmMdifdhSb7m/P7tvVExAANUCOETHhvFNb3YGR2qgKKQWJG88uMffCgYWYBT3iSDtxkfvb1p3MIAG0vediN7XjjNY7OFYCyz48dj9K08pg34M4D6msL7/AGPGabZNADE6eEWMzuOnKs/LgBw0TMifCDwNq1Mtm2JRAqmD3QbSe8QDHeO540m96EWxsJWQQvASReQATcG58dt6VJAIN/DY7WBna1XzOOpYvpCsYspMCBAA1Exzt6VkZjNBiy6r2i1vkDUU2IJiZpw+prgbCeW0xaaBiY7KO7pjfa5vN536UM43DSOnW/wquPiPBJUDjMb8tq1SLQPNYpgkEyPd3sBcEEjgfmafx8wCgSBrA073EKZMixPDhSBaEjmJv14bdKZyrCFJGlgouLGCLP5XB6RVuqKOvlndUCkAxLE7i4I8d9hTDLlwNJJm4Y7m3h+1L57GZEClrxAA+dY4aG7u9KrF7o0cRF7qa4QmJ03Go8eBpjDx8BAQmosWAAaIkEC/iLjgPGs5MF3ACid4+ZNPYXZuiddyJO0iREkk1MqrbCSrtl8d5JLE947AyAbTq8Bxo+czOGf/AGhp1GQwkQdWyruB49KSxpHfnUJ/c85MRVcZ5aAwmV+HLgRcEeFJLoigOOoWEkGSTz1QwABvYQSfIV1SVEEzfnaRMRy9KJjCGAQQbgyBFwOG42n96EL2JAHM7k87HoLcJqrvTHZSf8l/7qlW0J+of9P81Kd/QWehbMhsMYgYsACjKsQDYL73Ak8elL9m4Ly7soUe6oAgHTsQOE22jalvwzjI2vBJMMjBiwOkMBKtzAkA8LeFV7JzQAfCC6Y1E8dLKe+sQbwD6E08N5J7Na7aHcsmnVDTYyIi8fHj8KHi4c3O+qNjVkxCgcssQsk3gi4g+kUqO1NYKhYk7iAY3gwO941nUrRnTGmw0CvrJ2E8LSNt5vQ8AKGIQ24z8OFdfGnBYFdoO/EsL/e9UySlmJ+4FNJ1bY0M5qQw4yQPCxPHyruJ7hHNonxoedY6k5SD6L+9HgaBPE8fM1oi0CxcwAxABGmVsAQYj7867lsbvmeKx5E/zQMw+pmgEEFr8CAaHksQ6i0z7oBPKolFbIN1EvP5bXPhTiiQbj786z8tmdw9vHaus7hpUDcTBuR58L1zOMvSTTOA+k3tAEDb0FII4SBo1cfieVNYOZO5mLSBEXjefOqZh1BJBA58Wk7kEm/lWkW1pgRsWdgbczf9qTzkKJkkx+WOHOrqoiVbUCN53+4pFmYGOHpa2970WkJuhUYjEydxESZF6DmyVh7WN5ien0p3HxouBB8CBHnvQMTDQiXY3Gw4eNqrJWFgUzRdTPdEjaNuPC/rWx2b2jogTMsGIgEEhXtt/lHI1jK6XQJ3TvxFuPjRS9lG0kXAFo2PM006ehjXbQR31BNMiW/KuptyoOwnYXHjNYmIi6iycLecQZt51oZ9ACp1l2Map6bADl+1JM5IuRPKIG/Lh41d+oECwWCd5jcbUbFzGuNQv48Dwj60mTqMEgfvytVtBBgXPHl0puKv7NDQXT0FuRIJir4LGFKWKKLyZ2AJ/wCQkfGqYWIuk8GA/NxnaOtTGOhY4HpJIna2/wC1ZtPokSz+NIBA4WHnXMjgFh7o1cBxN4+fOiO7oZKcgAxgjmSBfh5TQXzhBEqB/wDX3uOx67HpV+UgN7JdnDDKu5KkXAB7xMTGxI/Y9KDn8ypJCe6pIYiBsRb75zWVhnFxXBBOuwAm4UmOPD960UBRbXB1XaDJgd4A734GxEVlKL9ZMkLjFdxrgIqg3kACPdPO/MdaNi4iKhCyxi5m5POT4dKrh4OosAdI/NG08FAAsIBsOFK5hQkBBMwbcQSPe3jhaaevBFkw2CzbVPdvsIA3vzHnVGyusCWvt8z58BVMPEPAyJEkmNyBafOjp+pYG54zPGIk8d/OhtrYMGOyX+1NSm/75FtBtbjwqVFcgv2MIY0YyYhEXmVN7EgyJkXgV6LtjOojjMAtpxALCJVoAYQSLQOZu0Wrx5S5I+7zFepyDLj5coyhmQ6lBE2ghonoSf8AiK66VWb1q/gmT7SV5VnAEAMrSVgTATTIG221/OrZfIAsrIGB0y6sDABkyjH3hEG4t1F6x8z2UVVnQmBYqZ+H80uM25VRqMqRKm223jVRpiVM38s5ZGngVH/cKv2YQXO9ifnQsnm1KaW3kQ43MEnS0+90Pl4NZCJPGZNtrxUSjSHjQxnPfXx+gplVlFXnFJ52da3/AG92tFBZR98KS6EhE4YJLI3dvqBsZ60tgNBlTu0QBvwFaCvpVxNibwD8ZrKK3SLbfMmflWa3ZC2abOIuYsLX4ifvhXMFtQFuA7oXf18vWohQzsDa5ne/Ouo8XDR13nj1gVPlCL5hG74H+H3/ABQM1isCCXHTyG21O5nG7jEnivH6/wCqUbAZiSSQL8fpHKqv1jJgYkraeVt4iuZk3upJ8eY4etGw0C+7bmSZNJY2NMSDad9zPyFZSab0TKhjMYYIktw7oA2iazsNOA7x/Nzv0q4QsYB67QLbR5VbCUqdweYm9tomha9EJ5tyrDgRfy+oq+GQwJk3aIvsbiLzQs65M6jtz3oGEVAUmTIv62FbJXEtLQ6+gwQ0ST3QDw50DObgAz+x60R2UKNC772hgYmL77GlGw2KgkEC3xoSGkcdBG1z1tVpaIGwNWwEmx6eO9Pf0y8jv1uIB4VbdFUC7Pw7nULAar7ef3yruLmdPfNzstojkRHKpg4pEhYXx+XPf6Vl593mGJtfrf41n29ktbGmcEanYtAOkTebb8hemW7ObWCzIGIkKo1ASB7x2FifMb1TByWFhycd5ZYlFuAd4LGzG11A41o5jtFQulIVDAHNVIEhdgAfqKUm/CXfgHI9naDqYsX5Bu6eMDTcwRO94FdDLiI8MF06gnXYzJEwdq5ks0yMShUFmIlokQdo6xvXPYqFaGDhibgd1STZbxJn4Vm029if2Iti4khQ8AMTPDkfICmsr2d7W/te6TpFiZi+w2G/xpLFcKpgGbRO5BG/LlUyeYdA4mNUSdoEtqAA5k+gq31rQG3h9l4eoqHB5yLnkf8AG/jtvU0IvurrIkTqtfeNo260Ds7Iu41O0I1ze5jnOw38aPmHXDEKbRAi/oTasnbb2SA/pkN9LX6/xUpf+o/x+NStMvsdP5M5MDVBUAibW4C979aZyLjBx1/SfkeFM5FYEm8fInhysKnbShkDKIYNqveRcGOV49DVrkqSiujVSSdD2dwwitLbsN+USD6RWJmcgmIBFnOzX4kR4jf1rdyzLj4SajDCx2vEx8zSyZUo/unSIvFrwQaJSUZ1dCksZUeQTEdO7JEnadyLeHH417L8G5jLOCmM4w3Hul2IUzNwfyET1FIY+RDJDCe9eBcW3nfj9Ky832S6wwlgOXvxyHO1arki9MpT8PXdp5bTjFEIeBbTfUCsggb7EUxHuz1+leM7N7cxEGlwXWb7hhAgwRtb5Vu5TtQ4jkpJWB3WYFpMAkfmaTwAJq8fgojOVZiZkk9LTUdLp0Atw2vRsywI46tzwjbnehuvecDcAj/tisF6Qgi7ER85PgaLl1SBJYyNuUi/150PB1CzQAOV5kmQf3o+XdWhQYE2B69KT6E0HxQrAhV3dZnnJm3A1nvjabwQJ52mfTzpjFZpcKQReOYM/wAmsTFwmBkk9JN6WNpWxVaH8HGdpJYW8dq7qBWWME23ufXalss7AEAgx6Dc/c0DEYjvG5+71Mo70JxsbxXiyxxk2k/ChJsTeePh9zQVw5vqG1XZWB07QOI4xTxoWNC7aiTAnz4caWQFSJ2sRtwPyiadRyTFvveKWzaaTEbcuI4A1rF+FocVH06hYgceQq4fWdgHjnI25Eb0XLL3FxAYMb7iRaPWfSqup1W0wLm9om82FZ38iTsEmDAvYjeec7Wrj4xNxsI+lHxsfSdICz0FDwnLcDPADY+tGVqy/C+WwoN5LEGAOdrc/wDddfIKxl20yJgct4nnttTCudwfdv5/xIrHz2aIIuGgWPCPClG5Mj0LmgFXujnI3jlx6TPWs9gSpO8DVtsAaWxMYkknw+EU7kEBkue6QQY342HStWsVZY92M2oFjJvJtYGALk7yRtxnxp3Fy4sSdMH3Qnuz7x8/5ouWxWw0Uex0qIe/Hhby4mg5vtHGcuoKpMECLEC4uN/E8q5225aMpO2J5rIsbhoUxBIM8TaBbjUOGrOLEiwMEWtuALz47UfFfEd5VbE6rtMzzva82q6smEDJ75E92IB3vuTxNqpvS+SbGMTMEgEyEnSBIBIHG/QE0tid9RNwotHDz40IKuK4ks0ydoHDa8UbEzWmAp07zHC9pPOoaqkgKSnX/oFSsz+sf9YrlaYoeJrBl06NpN48b0yMyhXQlhEauJ6dKXxMqjSwYarRvB8hVkw2AEDVzYb+Q3865nTJAdjsNbYTjvBu6TwYe6fA7+lbGWxSZBkXvO8i3C9YOPlSr+0dgkxABl2I2sNrc6dzueVXR3sGsrDzB1Dj866Z8a5oprtG8lmlJdmm+MCJERs3S0z8KQzWdUFQrEmdht5/fGu+1VH0sAVcCG/K0yRHPb40FcvhrqZhJm0naItXKoYP9kzCqeynanZK4yqyiH5gbzHvVjYuQxcu6uwgA911uuoXA6cLV63LZxSsOw1chFulMKh0lT3heRvvwjjuK2j/AFEovrRpmzyfZ2eR3Bx3YBbWEtEHbwtWwxXWdLq8g3XiY4jgaR7T/D8sfZjQd4nunoB+XxrBfGxMNtDypXgfp0twrrjOPItGkZKR69cRtJ4tbfqGtHwqZSFI7pEMD6cBWTlu0gUAcWBnULz0jhEn1rXOHCh1DMAOAmJGrYTwm/Q0nBxYY7OYb2A1XYk34gG3lM0jmMEmY5H5b0d80h0smpjAi0CDvc2N6WxcUEFVDEG0xAF+M8P2pKwxYz2fggpMbwCOA2HrvVMxgSTawO+3lXMJ3WyYZHOWBkgjb4GiscYkAphrb8zEneTAXmOdZyTUrtEuO+xddCwCJPw8LUN2Jnbfz34UTGRxBcoOAAE89xP3agoCxgb+HL+BRf2DLYSi9rTufK/wq+Ph6rKsnlAn0HnTeXyyn3nEbwN45GY61pJiYOGCykQbEne1ZS5KZLlRlZbs/GCQyhFmQSdgeAANv5p/+yJABcgeUCZ4jeu4nb2CAUjXPAG0fOksbtBNJuVBAgAzvxjhWblyS+iXJljk8JCWZy4JiAIPnPWdqZy2TWBuDuZO3JYrFwe0xJXQrqLksO9PPpT+H2ynuMphtmnbx5ihqaC5As+jIG03B4idj47fxWHmMF5usTavTZ7HCDuibDYHjx5ViyXaZ4+fpWnFNlKRk4mCQYPOtPs7DMC0wbgC7CZg86p/Qu7mVMC5Mj08elamU1KrLEdd+VrWrec9aKctCzZpm7rghjPdiAJ2CiNuFdwMsx4kDa+0g7T41f2bBtai3AmNyaJjZ5mBwxYGAdrniZ4XvytWb70Q38CONjkGznUvI8trj73omV1OZKkgCJAtzk8TRMvl0PfZTAmQLzJtw5UxnsVUCBJgxKgbdSeFJtdCF8XNaT3NIMb9BwE9KRcSZdt7+p2HCKsyQdvLl+9TCwyRJ4728o++tVHWxpUGnD+/91KW9kv6TXaehjAzkwFELx84P0+VNYGYVCAAWW4N/ORy4+tZGZzJZ3LIUHBI23EbDnyomBmoAIHQ+e3yqHx6E4he2Y060nusDJ8Yg+celamFiJmMu6hLiHUeA7yeEVkZ7M6sNlC27twLe8Ip/KZ04L4bqylSBKiCLBVaRwkAT51txp40bcX8aforhO6DS+G5wWvABOjjKsLdYmi5rFVMMGS+oyrDj48ot51olXTEYaf/AEpDIRAXSQYWAdxMG3CkfZaWY4Y1oTLpq3kXKTcGZPn5Um1dS7E1bpg8tn2MdxCBYjQs8bk72pxs0yd9AY43sPI3AoeXw8OJSWAMsTZ16Os2I+42pzLYZafZqrnkTB67kCplBN1QOERfHzZdF0jvEnvE7MdpEeVYeJlcTFJZyAI95haf0i2/SvS4PZpYMzYehcMgMLWJv1M9BWv2aqMhCrMcCBaeHH09adx4VsUVR8/zPZroO6dYPAC/pe1N9lds+zKyCCpEENBBBkz0gkQI3r2q5fDJsiA7HUtwTzAIFee7ayqsSGyzyDAfDUkeMrY251pDljLp2Vs3lxMDNYfcRhiDbQFXUIkhlmDHA2JrGymG2ITBRCN9RAm/Uj+K89gri4Z1LqAXoVaJ2PEbcKe7N7SR3U4vMlzMEgxsedjHU1o4pjVPRu5jK4mCoIhw0nu3gnhyFI4mtuEeBFeky2UwHkJ/6iptqCm3kZjfnSuL/TlmUIgZdwuHJHUydutL8cWyWmjzakT3202N9JNKrmSpJQmdpH38K9Uez1I1rqBPJWUQepm1ZuJ2PmTqZEhZ943jwt3vIVL40tMFGzH/AKtzIIMxyM/KBai4mYLqBq2FyWn5mtPI/hLM4rMZVlBuzNpW4mCN134xT5/C2WwSpzOYJINlwtKL4asQmfEAVLhBFLhvw8xmFLEFUTo2tJNurfA0HC7Nx8U6cPDLkH8pBg9eAr6ph5XsjCKlkR3ImHc4rL1gkhfGIrue/HGXwVK4WEhj8ogX4WAqXKK0ivxxXZ4TC/BuYZZfSjzGiSznyQkT0oS/hTMIhZsJwQSQSQq6QOTxJJ+lb+f/AByz6hr0yLBO78R3t+tZKdpYOIC7YKseLOS7eMsbVDm66YpRj0jMV3BWU1Rxvt0giOW1GXEDAmChBHvEX8ONTGxlU6l93lw8PCgYeewo7yI3ldfA0fr4mRhF+jGRy5diwZGUby1p4X4+FarZgsSimADFhHx5X41m4jYDpOGoWDNpFx8KULNoZFJAJltiSJ+/QVLSe+iZcfwHzOZmVXcWMG5I36bT6Ut7de9YHTAgzxMftREwEVTpWGgbkecnelHx10kSNZ5X8rWirVPpEpfQ1g9qaJUGxG3WPhS+Lnog7i/ztSiIDLWPD96jjjaeEjrTwjfQUrDHOWgECZ8TtuRf/VCGZ3LMRER9+lUZ1YwBB8gOtXKhW92w8N/rVJJeFa+C/tE/W/p/NSrf1rfp+VSj/AX9I08RGYFMYF7Sr7kHgwPC35eNYeawCjEapjlsREgib3Bnzpz2zId5BExe17x8D51TMQ41wR5nbhPh9ace/otpMA8lLXWQJ5MKezOAHQFNIYbg7yOR5HlSSgAQOfX43o+HhztJPT9qvWqCjb7MzK4uGodQxwzMFmFr3leVum9aKY+DrDdzoGk38wBPWa8xlCcN9cxztuOINW/qFmw3No+V6t16hy3s2u1MLDY+0DumL+UgAWHAgCGHjWfg9oROtCH2DJGk/wCRESI3j5UsuY1WIvzJo2DAm88xb60XYka2fzRxFXDR2RVvEbn9RtcmfjQ1wWCgPihesHysP4qmXfDiCxXl3Z9JMVd80wi6ssfpSR4iPlNKXHCXaBoEwVjfFdjxhQJ9WNbnZBxMNYQ4gU82AH/jWZh5xBYr/wBEKfgfpWlls0Vll9qvMllH/lE0JQjt0hGhj9p4gElyo4izH14V5LtjK5bF1OrMuLzRDpY/5Cw8xevT/wBzU++Aw4kgH4rU14De6QvmP3rRNS2mB4TsvNZnBaEViDup91txf7tW1k8Z2xEcKcPE1KNcwoAPEm0dL1ut2YrXRh6xSWJ2I5uCT4EGhxHkb3aWdzauQG7nB8OXXTw90G/pWNme3MNLv7XGeNijb+cx8KzX7OxUMgsPDf4VzVjDdmbx/es5Qye7LjyY9DOL2x2jmk0ZbL4iINyFj4sfrXn872BmVIOJhuDxLN3j6Wr0WX7czOH3dbaeTXHxFan97w8Re+2l+ZBI+FOMYrolzk+z5+zjDGhl0NuRxa9qEuYSPe9RXts0Ff8A+B/GAT6gfOsnM9moT/7KKOasP/1SfEmJvZ5jWo4D5Gu5fPlJAG/Ga1MfstOBYf8AAH5GgHsrD/U3pH0ocPGILlzqFlUzel3w4JIEEdNqJ/QBfdc+tUfLv+qZ6j61n+Jp6AWxMfYhhHGomaIvqB6XuOtR8i3jA2t9KC2VjdT8arBUOhrEHtAO8J4Rx6G/L5VfDy7IL6bm5tMcqXy2IcM6lsetMjPMd4PkJpVqiWmCxCBsKExMb/fKiNiLPjXMZQVIB8jt9iihUCQGJiR4QKMvuSHAvAXj47bcKWXDYeFGwn/LqIFNxG0G9gelSgQ/P4ipUYS+QpjLYhMbfOmcJ1IhmjwHHy4VXCwSp76MxG4Fh60R2Ctq9lAtAmfrWuMkinXgzhqxsoVRwlRf1quLhFI1QoJsYsTyHWupnuPeBHWIEcLU8MQY2GyssgjcsouON+PWscuS+hCYfLxcvPl+31quL2epXXhvrHEEQw+lJL2TjclIH+a/e1NZHIlWlzC2sGvw5GRV/jld2NMCqBTBkHwphMvqEin8DK4KyXdTPCDMeJNDx9OmEZj4gRVSi0tdjchfL4GGffYyOAtHmfoKZL4arZLz4+Z1VnvgxdhPWY+tX9tqjb74WrFwm3uxWd/qiDKhfIfDpRsc4iqDJgm44CeBG3Sq4OTcmQp9DFMPlMQC6NHgap8UmDYHAzJXmCOHIXo+H2grGGUePG3OP2pF0IPfPl/uj5Ulzow8PUfCfMk01DD9m6EOpmUm0jwY05hZkH3XY+Y+tU/s+Io1NpgCTEeYgEdKOnZ2oK5DAKZAJ34z3YjwnhxqZf1SX8R0PJh40XYHod66MNyCSEPT7HSlGzCM2lcVj4DbjxIttwNcNoCsj32LEkQd+7xjgax/9XIu2v8AQYou7psyCfP96C2Uw2/T6mnczlEddSqoMd4LvYdNzWF7UDZq6+DnXItraE0Ov2RPuqSOjUljdjutxqHlVhmjwPrNXw88diY87fGtqQCP9Pir7pJ8Epcq43VvQ1vPnWNpjlJF/A3oTdoDZhB6/wAUV9gYTMw/LA8KESv6a3nzAI92f+R/mk8TGT9BB52b5XqWvsLMZmXiDULrwrULK2zp4ER9BQnwhx0+UftUtMdmaxniaEw+4rTRVU6oXzEj5U0e1EPv4aH/AOkofjIo0I887dBQSw6ivQYgwX2JXown4iljkhMrpb4/Cih0ZSqeE1XWZvXpcE42J3QgI6LA+VUzPYr7sg9aKEYftx09K5Wh/aPD/qqVOCFih9cy73dpPiI8yf2rgSTJ0gev0vWZg4rDhT6Y4Iq1ZToZ9ggi69SQJ9DQ8V0B963IUu2HKzffnS7nlwpt0FD3thPdBrusfmPlI+lZxxDVNVLIKNVHw/0z50VM2g2w1871kriwOlWV6WQ6Nle0lH5EH/Grt2z+kBfACsNnqgajJhib6drOPzU7l/xNiIYBB8RXmNVXV6MgaNXtTH9u2t4B/wAQAKJ2RnEw9SKASbkze0WPTpNZPtaXdSW1Cx49fGs+VKcaEz1ebxXcK6lONmJM+Q39RS+U7TfRpcwoPOJI5dOFeYPtIMNueZoLF45+dYrg/Wm0CZv5zMYZcuF1GIJJsPI8+Vcws2RpKSq328bE9eNecV3H7fxV1zL0/wALqrC2enfttgJBAYeWoRPAWmgYuKjsGumrjA0k8xG1YaYjtyrR7OyYYw7T8I86vi4cXaFRpDKn8pDCq4mTxNwldB9ge/JHDrVsx2+xsq6RXVUQ2ACPEFf2/wB1cZdmH7il/wC7sTXU7UaaVIdM6cJlN6PpsZRfGBPx2pDNZliQa4pLSWNNUFFsQkjvMJ5fYqi4xiAduHPwqrIoufOroi9enh1+FJoWhfEM3A9LfxS7p9mmsQFWkR/FdsR3gPviKzaGhLCF4Y2p89k4tmRGdTsyAn5Uz2MEXFUPhjFQ20ncdQRxr6bls0mCgXBTSv6ZNvI1UaS2G29Gf+HOzk9gAQZO+pSGnzpPtfsVxdJ+NXz/AOJMdD3VHpes5/xbj/mJ9IpOSZSg0Zv9txv0/CpTn/8AWv1+FSi0OmeKSSady5ltMi3zoCNCyLVxFIkihaJezTRd1PEWpHEWZUcPjVsHGJ3O1cxmgzVPaAXc3risAariDjVA1QUqL6qsrVQSa7BpDLaq6HqlWU0CCKaKhoS+lEWgKQQVwCu6DXAvhRROiNVRRfZzU/pz9kUYhYs6iqBKaOWPMetdGUJp4sLBoelGVoq+HlCN7UV8LzqoxaQrLYebMQbjkbj40zhYycUQ+VZrJyqntSKGhqj0CYWVf3kKHobVG/DuG18PFjoawlxqZws2y7Gp2umXSNxPwe7gRjYfnNamW/A2HA149+OkR8689gdsMONauW7fOxM+NGbXaFin6az/AIHyxFsV58RHxFLN+DMNPzsQOo+gqL2kG2NUxM2x4mrU0/CHEzs92EizAnxYfKsXM5XDEDSEI3vP2fOtrGd2MBqXxOz8Ui4U+X1qtPwVD2Uy3ZzgF8XFDwB7wgQLRabVqJlLTh4pxF5mJ+FeFzCFT3kitfsLtU4TWJ0nhQmroKPXDs4st70B+wsPdorWyuYXEUMppftJGgx8DTxQZMxv7dgfpHpXKW1P+o1KWI7PBFZt6VFgCK7UrIoqjQZNGxXDC49KlSmAoSRVCa7UqRnAxruo12pTEXVqIKlSpZSSOqDV1BqVKVsKRYdaNhoTtUqVoiBpMqfzCKdwsisSxrtStEiS4wMP8veqh0jZa7UpoCSDSuKldqU2As6Uu6VKlSwAkUTCxitSpWbLQT+o5irq/KpUpjD4eaIpzD7R51KlAD+Tz6yJreGIrrJJrtSqRDMzOZYHrWccAC23lUqUAFymM2EZRjHEcK9Fk/xAjAK/xqVKtEsa15fmPWpUqVQj/9k=" alt="" />
            <img alt="" src="https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FkJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CameraRoll;
