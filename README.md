# reproduction

`ntl dev`

get port from `Functions server is listening on < PORT >`

replace port in `postmanCURL.txt`,
copy/paste that `cURL` command

or with Postman `POST` with Body set to `raw` and type set to `JSON`
to: `http://localhost:<PORT>/example`
and with this payload:

```
{
    "hello": "world"
}
```

