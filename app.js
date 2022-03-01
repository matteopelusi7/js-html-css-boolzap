const app = new Vue({

    el: '#app',
    data: {

        contacts: [

            {
                name: 'Michele',
                avatar: 'https://picsum.photos/id/237/200',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'https://picsum.photos/seed/picsum/200',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            
            },   
            {
                name: 'Samuele',
                avatar: 'https://picsum.photos/200',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'https://picsum.photos/id/500/200',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

    currentIndex: 0,
    textMessage: '',

    },

    methods: {

        goContact: function(i) {
            
            this.currentIndex = i;

        },

        newMessage: function(i) {

            if(this.textMessage !== '') {
                
                const newMessageText = {
                    date: '01/03/2022 18:00',
                    text: this.textMessage,
                    status: 'sent'
                }
                
                this.contacts[i].messages.push(newMessageText);
                
            }
            
            this.textMessage = '';

            setTimeout(() => {
                
                const newMessageText = {
                    date: '01/03/2022 18:01',
                    text: 'Ok',
                    status: 'received'
                }
                
                this.contacts[i].messages.push(newMessageText);

            }, 1000);

        }

    }

});