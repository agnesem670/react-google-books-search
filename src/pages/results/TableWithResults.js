import { useSearchParams } from "react-router-dom"
import { useEffect, useState, useMemo } from "react"
import { useRowSelect, useTable } from "react-table"
import axios from "axios"

import { SEARCH } from "../Home"
import { COLUMNS } from "../../data/columns"
import { APIKey } from "../../data/APIKey"
import { Checkbox } from '../../components/Checkbox'

import './table.css'



export default function TableWithResults() {
  const [search, setSearch] = useState(SEARCH)
  const [inputValue, setInputValue] = useState('')
  const [posts, setPost] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const [display, setDisplay] = useState('none')
  const [id, setId] = useState([])

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => posts, [posts])

  /* ----------------------------------- */

  useEffect(() => {
    setSearchParams({ filter: search })
  }, [search])

  /* ----------------------------------- */

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${APIKey}`)
      .then(response => {
        setPost(response.data.items)
        console.log(posts)
      })
      .catch(err => {
        console.log(err)
      })
  }, [search])

  /* ----------------------------------- */

  const handleDetails = (event) => {
    setDisplay('details')
    setId(event.currentTarget.id)
  }

  /* ----------------------------------- */

  let {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable({
    columns,
    data
  }, useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            )
          },
          ...columns,

          {
            id: 'details',
            Header: 'Details',
            Footer: 'Details',
            Cell: ({ row }) => (
              <button type='button' id={row.values.id} value={row.id} onClick={handleDetails}>More details</button>
            )
          },

        ]
      })
    }
  )

  /* ----------------------------------- */

  return (
    <div>
      <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button type='button' onClick={() => setSearch(inputValue)} >Search</button>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')} </th>))
              }
            </tr>
          ))}

        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr{...row.getRowProps()} key={row.index}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')} </td>
                })}

              </tr>
            )

          })
          }

        </tbody>
        <tfoot>
          {
            footerGroups.map(footerGroup => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {
                  footerGroup.headers.map(column => (
                    <td {...column.getFooterProps}>
                      {
                        column.render('Footer')
                      }
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tfoot>
      </table>

      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
    </div>
  )
}

