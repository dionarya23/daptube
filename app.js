var VueO = new Vue({
  el: '#app',
  data:{
    url: ''
  },
  methods:{
    proses: function(){
      var res = this.url.substring(0, 32);
      if (this.url === ''){
        alert("Tidak Boleh Kosong");
      }else if(res !== 'https://www.youtube.com/watch?v='){
      alert("Harap Masukan Url Youtube Yang benar");
      }else{
        this.tampilkan('belum');
        document.getElementById('utama').classList.add('hilang');
        this.$http.get('http://wahidganteng.ga/process/api/470e9ccb4849637a807a4498a31946a9/youtube-downloader?url='+this.url).then(response => {
        this.tampilkan('selesai')
        document.getElementById('keduax').classList.remove('hilang');
        document.getElementById('textTitle').innerHTML = response.body.title;
        document.getElementById('video').innerHTML = '<img class="w3-round w3-image w3-bordered" src="https://i.ytimg.com/vi/'+this.url.substring(32, 45)+'/maxresdefault.jpg" width="450" height="250">';
        // console.log(response.body.data);

        for (var i = 0; i < response.body.data.length; i++) {
          // console.log(response.body.data[i].type);
          document.getElementById('tombolDownload').innerHTML += '<a href="'+response.body.data[i].link+'" target="_blank" class="w3-btn w3-white w3-border w3-border-blue w3-round">'+response.body.data[i].type+' : '+response.body.data[i].size+'</a> ';
        }

        });
    }
  },
  tampilkan: function(status){
    if (status === 'belum'){
    document.getElementById('loading').classList.remove("hilang");
  }else{
    document.getElementById('loading').classList.add("hilang");
  } //end of else
  }
  }
});

Vue.http.options.emulateJSON = true;
