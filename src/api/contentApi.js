class contentApi {

  static fetchContent() {
    const request = new Request('https://tomahock.com/cenas/suprimidos/data.php?last=1', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    })
    return fetch(request).then(response => {
      if (response.status === 200) {
        return response.json()
      }
      return response.json().then(response => { throw (response) })
    }).catch(error => {
      throw (error)
    })
  }
}

export default contentApi