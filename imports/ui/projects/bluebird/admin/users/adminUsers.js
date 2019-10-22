import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import PillButton from '../../components/buttons/pillBtn'
import DropDown, { DropDowns } from '../../components/dropdown'
import { Header } from '../../components/headers'
import { DataCardWrapper } from '../../components/datacard/datacard-styl'
import { SeperatedTable, TableHeader, TableHeaderItem, TableData } from '../../components/tables'


const AdminUsers = ({ users }) => {
  const usersFilter = {
    title: 'User Filter',
    options: {
      all: { abbr: '∞', subject: 'All' },
      starter: { abbr: 'ST', subject: 'Starter Plans' },
      business: { abbr: 'BN', subject: 'Business Plans' },
      accountant: { abbr: 'AC', subject: 'Accountants' },
      pending: { abbr: 'PN', subject: 'Pending' },
      active: { abbr: 'AT', subject: 'Active' },
      admin: { abbr: 'AM', subject: 'Admins' },
    },
    selected: 'all',
    action: () => {},
  }

  return (
    <Fragment>
      <DropDowns>
        <DropDown data={usersFilter} />
      </DropDowns>
      <DataCardWrapper margin="20px auto" maxwidth="900px">
        <Header size="24px" space="25px" dark>
          Users
        </Header>
        <SeperatedTable>
          <TableHeader alignLeft>
            <tr>
              <TableHeaderItem>Name</TableHeaderItem>
              <TableHeaderItem>Email</TableHeaderItem>
              <TableHeaderItem>Created</TableHeaderItem>
              <TableHeaderItem>Plan</TableHeaderItem>
              <TableHeaderItem>Status</TableHeaderItem>
              <TableHeaderItem>Role</TableHeaderItem>
            </tr>
          </TableHeader>
          <tbody>
            {users.map((user) => {
              const { id, emails, createdAt, profile, plan, roles } = user
              return (
                <tr key={id} className="clickable" onClick={() => {}}>
                  <TableData align="left" padding="20px 35px 20px 0">
                    {profile.name}
                  </TableData>
                  <TableData align="left" padding="20px 35px 20px 0">
                    {emails[0] && emails[0].address}
                  </TableData>
                  <TableData align="left" padding="20px 35px 20px 0">
                    {moment(createdAt).format('MMM DD YYYY')}
                  </TableData>
                  <TableData align="left" padding="20px 35px 20px 0">
                    {plan}
                  </TableData>
                  <TableData align="left" padding="20px 35px 20px 0">
                    {profile.status === 'active' ? 'active' : 'pending'}
                  </TableData>
                  <TableData align="left" padding="20px 35px 20px 0">
                    {roles[0]}
                  </TableData>
                </tr>
              )
            })}
          </tbody>
        </SeperatedTable>
      </DataCardWrapper>
    </Fragment>
  )
}

export default AdminUsers

AdminUsers.propTypes = {
  users: PropTypes.array.isRequired,
}
