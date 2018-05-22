import React from 'react'

export class Player extends React.Component {
    render() {
        return (
            <div>
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Search Song Name</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </div>

                <div class="mt-5 list-group">
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <audio controls>
                            <source src="assets/songs/VRGO_x_LICETO_-_SHUSHANA_Official_Video_Prod_by_Shizo[www.MP3Fiber.com].mp3" type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>Donec id elit non mi porta.</small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small class="text-muted">3 days ago</small>
                        </div>
                        <audio controls>
                            <source src="assets/songs/VRGO_x_LICETO_-_SHUSHANA_Official_Video_Prod_by_Shizo[www.MP3Fiber.com].mp3" type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small class="text-muted">Donec id elit non mi porta.</small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small class="text-muted">3 days ago</small>
                        </div>
                        <audio controls>
                            <source src="assets/songs/VRGO_x_LICETO_-_SHUSHANA_Official_Video_Prod_by_Shizo[www.MP3Fiber.com].mp3" type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small class="text-muted">Donec id elit non mi porta.</small>
                    </a>
                </div>
            </div>
        );
    }
}