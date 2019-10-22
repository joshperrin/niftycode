/* eslint no-prototype-builtins: 0 */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import Alert from 'react-s-alert'

import Icon from '../../icons/icon'
import IconBtn from '../../elements/buttons/iconBtn'
import formatToCurrency from '../../utilities/currency'
import { Header } from '../../elements/headers'
import { Circle } from '../../elements/menus/circlemenu'
import { updatePayPeriod } from '../../../api/payperiods/methods'
import {
  DataDetails,
  DataSection,
  DataItem,
  DataFieldContainer,
  DataField,
  DataLabel,
  DataValue,
  DataAction,
  DataItemAction,
} from './datacard-styl'

const DataCard = ({ subject }) => {
  const inactiveSubject = subject.hasOwnProperty('active') && !subject.active
  return (
    !isEmpty(subject) && (
      <Fragment>
        {subject.type === 'payperiod' && (
          <DataAction
            onClick={() => {
              updatePayPeriod.call({
                payPeriodId: subject._id,
                data: { completed: true } },
              (err) => {
                if (err) {
                  Alert.error(err.reason)
                } else {
                  Alert.success('Pay period successfully updated')
                }
              })
            }}
            complete={subject.complete}
          >
            <Icon icon="CircleCheck" height="20px" width="20px" />
            <p>{subject.complete ? 'complete' : 'mark complete'}</p>
          </DataAction>
        )}
        <Circle
          size="60px"
          fontSize="18px"
          font="ExtraBold"
          border="4px"
          inactive={inactiveSubject}
        >
          {subject.abbr}
        </Circle>
        <Header size="19px" font="ExtraBold" space="6px" topSpace="9px" dark>{subject.title}</Header>
        {inactiveSubject && <DataDetails color="#B8020D">Inactive</DataDetails>}
        {subject.details.map((detail, i) => <DataDetails key={i}>{detail}</DataDetails>)}
        <DataSection>
          {subject.items.map(item => (
            <DataItem key={item._id} onClick={item.action}>
              <DataField top="6px" right="30px">
                <DataLabel>
                  {item.type === 'employee' ? (
                    <Fragment>pay<br />period</Fragment>
                  ) : (
                    'employee'
                  )}
                </DataLabel>
                <DataValue>#{item.identifier}</DataValue>
              </DataField>
              <DataField top="3px">
                {item.type === 'employee' ? (
                  <Fragment>
                    <DataValue fontSize="10px">{item.title.start}</DataValue>
                    <span>to</span>
                    <DataValue fontSize="10px">{item.title.end}</DataValue>
                  </Fragment>
                ) : (
                  <DataValue fontSize="14px" top="3px">
                    {item.title.firstName}
                    <br />
                    {item.title.lastName}
                  </DataValue>
                )}
              </DataField>
              {item.data ? (
                <DataFieldContainer>
                  {Object.entries(item.data).map(([key, value], i) => (
                    <DataField key={i}>
                      <DataLabel>{key}</DataLabel>
                      <DataValue>
                        ${formatToCurrency(value)}
                      </DataValue>
                    </DataField>
                  ))}
                </DataFieldContainer>
              ) : (
                <DataItemAction>
                  <IconBtn icon="ArrowRight" btnText="enter payroll" iconRight />
                </DataItemAction>
              )}
            </DataItem>
          ))}
        </DataSection>
      </Fragment>
    )
  )
}

DataCard.propTypes = {
  subject: PropTypes.object.isRequired,
  history: PropTypes.object,
}

DataCard.defaultProps = {
  history: {},
}

export default DataCard
