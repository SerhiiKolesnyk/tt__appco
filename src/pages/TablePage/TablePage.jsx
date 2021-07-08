import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Pagination } from '../../components/Pagination';

import users from '../../data/users.json';
import usersStats from '../../data/users_statistic.json';

import './TablePage.scss';

function findTotalClicks(id) {
  return usersStats.filter(user => user.user_id === id).reduce((a, e) => (a + e.clicks), 0);
}
function findTotalViews(id) {
  return usersStats.filter(user => user.user_id === id).reduce((a, e) => (a + e.page_views), 0);
}
function getVisiableUsers(arr, page, maxpage) {
  let start = 50 * (page - 1);
  console.log(start);
  let finish = start + 50;
  console.log(finish);
  return page !== maxpage ? arr.slice(start, finish) : arr.slice(start);
}

export const TablePage = () => {
  const prepearedData = users.map(user =>
  ({
    ...user,
    totalClics: findTotalClicks(user.id),
    totalViews: findTotalViews(user.id),
  })).sort((user1, user2) => user1.id - user2.id);

  const maxPages = Math.ceil(prepearedData.length / 50);
  const [page, setPage] = useState(1);

  const visiableUsers = getVisiableUsers(prepearedData, page, maxPages);
  console.log(visiableUsers);
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__logo logo'>AppCo</div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <nav className="nav main__nav">
            <ul className="nav__list">
              <Link to="/">
                <li className="nav__item">Main page &gt;&#160;</li>
              </Link>
              <li className="nav__item">User statistics</li>
            </ul>
          </nav>
          <h1 className="table-title main__table-title">
            Users statistics
          </h1>
          <table className="table main__table">
            <tr className="table__head">
              <td className="table__th table__th--first">Id</td>
              <td className="table__th">First name</td>
              <td className="table__th">Last name</td>
              <td className="table__th">Email</td>
              <td className="table__th">Gender</td>
              <td className="table__th">Ip adress</td>
              <td className="table__th">Total clicks</td>
              <td className="table__th table__th--last">Total page views</td>
            </tr>
            {visiableUsers.map(user => (
              <tr className={"table__body " + (user.id % 2 === 0 ? "table__body--grey" : "")} key={user.id}>
                <td className="table__td">{user.id}</td>
                <td className="table__td">{user.first_name}</td>
                <td className="table__td">{user.last_name}</td>
                <td className="table__td">{user.email}</td>
                <td className="table__td">{user.gender}</td>
                <td className="table__td">{user.ip_address}</td>
                <td className="table__td">{user.totalClics}</td>
                <td className="table__td">{user.totalViews}</td>
              </tr>
            ))}
          </table>
          <Pagination
            total={prepearedData.length}
            page={page}
            onChangePage={setPage}
          />
        </div>
      </main>
      <footer className='footer'>
        <div className='container footer__container'>
          <div className='footer__copyright'>
            <span className='footer__logo'>
              AppCo
            </span>
            <span className='footer__rights'>
              All rights reserved by ThemeTags
            </span>
            <span className='footer__rights'>
              Copyrights © 2019.
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}