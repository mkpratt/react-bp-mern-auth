import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'

// import { 
//   StyledDatatable,
// } from './styles'

import './datatable.styl'

const Datatable = ({
  columns,
  data,
  loading,
  minRows,
  noDataText,
  onRowClick,
  resizable,
  showPageSizeOptions,
  defaultPageSize,
}) => (
  <ReactTable
    className="-striped -highlight"
    data={data}
    columns={columns}
    loading={loading}
    noDataText={noDataText}
    minRows={minRows}
    resizable={resizable}
    showPageSizeOptions={showPageSizeOptions}
    defaultPageSize={defaultPageSize}
    showPageJump={false}
    getTrProps={(state, rowInfo, instance) => ({ // eslint-disable-line no-unused-vars
      onClick: (e, handleOriginal) => {
        onRowClick(rowInfo.original)
        if (handleOriginal) {
          handleOriginal()
        }
      } 
    })}
  />
)

Datatable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  defaultPageSize: PropTypes.number,
  loading: PropTypes.bool,
  minRows: PropTypes.number,
  noDataText: PropTypes.string,
  onRowClick: PropTypes.func,
  resizable: PropTypes.bool,
  showPageSizeOptions: PropTypes.bool,
}

Datatable.defaultProps = {
  defaultPageSize: 20,
  loading: false,
  minRows: 1,
  noDataText: 'No data to show',
  onRowClick: () => {},
  resizable: false,
  showPageSizeOptions: false,
}

export default Datatable
