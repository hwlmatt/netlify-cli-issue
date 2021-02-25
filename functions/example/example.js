

exports.handler = async function(event, context) {

  try {
    const { hello } = JSON.parse(event.body)
    return  {
      statusCode: 200,
      body: JSON.stringify({ hello }),
    }
  } catch (err) {
    console.error(err)
	return {
	  statusCode: 403,
      body: `Invalid`
	}
  }
}